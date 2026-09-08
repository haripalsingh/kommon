<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Never let raw PHP errors/warnings leak into the response body — always
// return valid JSON, and log the real error server-side for debugging.
ini_set('display_errors', '0');
error_reporting(E_ALL);
register_shutdown_function(function () {
    $err = error_get_last();
    if ($err && in_array($err['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR], true)) {
        if (!headers_sent()) {
            header('Content-Type: application/json');
        }
        echo json_encode([
            'success' => false,
            'message' => 'Server error',
            'debug'   => $err['message'] . ' in ' . $err['file'] . ':' . $err['line'],
        ]);
    }
});

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']); exit();
}

require_once __DIR__ . '/Exception.php';
require_once __DIR__ . '/PHPMailer.php';
require_once __DIR__ . '/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$input   = json_decode(file_get_contents('php://input'), true);
$name    = htmlspecialchars(trim($input['fullName'] ?? ''));
$email   = htmlspecialchars(trim($input['email']    ?? ''));
$phone   = htmlspecialchars(trim($input['phone']    ?? ''));
$subject = htmlspecialchars(trim($input['subject']  ?? ''));
$message = htmlspecialchars(trim($input['message']  ?? ''));
$date    = date('d M Y, h:i A');

if (!$name || !$email || !$phone || !$subject || !$message) {
    echo json_encode(['success' => false, 'message' => 'All fields required']); exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email']); exit();
}
if (!preg_match('/^[0-9]{10}$/', $phone)) {
    echo json_encode(['success' => false, 'message' => 'Phone number must be 10 digits']); exit();
}

// --- Credentials: read from environment first, config.php as fallback ---
// Set these as Environment Variables in cPanel (Software > Setup PHP / MultiPHP)
// if your host supports it. Otherwise create mailer/config.php (see below)
// and make sure config.php is NOT web-accessible (see .htaccess note).
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php'; // must define $gmailUser, $gmailPass, $ownerEmail
} else {
    $gmailUser  = getenv('GMAIL_USER')  ?: '';
    $gmailPass  = getenv('GMAIL_PASS')  ?: '';
    $ownerEmail = getenv('OWNER_EMAIL') ?: '';
}

if (!$gmailUser || !$gmailPass || !$ownerEmail) {
    error_log('Mail config missing: set config.php or env vars GMAIL_USER/GMAIL_PASS/OWNER_EMAIL');
    echo json_encode(['success' => false, 'message' => 'Server mail config error']); exit();
}

$lastMailError = '';

function sendMail($gmailUser, $gmailPass, $to, $subject, $htmlBody, $replyTo = '') {
    global $lastMailError;
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = $gmailUser;
        $mail->Password   = $gmailPass;
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->setFrom($gmailUser, 'Kommon Canvas');
        $mail->addAddress($to);
        if ($replyTo) $mail->addReplyTo($replyTo);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->send();
        return true;
    } catch (Exception $e) {
        $lastMailError = $mail->ErrorInfo;
        error_log("Mail error: " . $mail->ErrorInfo);
        return false;
    }
}

$messageHtml = nl2br($message); // preserve line breaks typed by the visitor

$ownerHtml = "
<table width='100%' cellpadding='0' cellspacing='0' style='max-width:600px;margin:0 auto;font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;'>
  <tr><td style='background:#3B3BFF;padding:28px 32px;text-align:center;'>
    <div style='font-size:22px;font-weight:700;color:#fff;'>New Contact Form Submission</div>
  </td></tr>
  <tr><td style='padding:28px 32px;background:#fff;'>
    <table width='100%' cellpadding='0' cellspacing='0'>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e5e5;'><b>Name:</b> $name</td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e5e5;'><b>Email:</b> $email</td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e5e5;'><b>Phone:</b> $phone</td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e5e5;'><b>Subject:</b> $subject</td></tr>
      <tr><td style='padding:10px 0;'><b>Message:</b><br/>
        <div style='background:#f7f7f7;border-radius:8px;padding:14px 16px;margin-top:6px;'>$messageHtml</div>
      </td></tr>
    </table>
    <p style='font-size:12px;color:#999;margin-top:20px;'>$date</p>
  </td></tr>
</table>";

$customerHtml = "
<table width='100%' cellpadding='0' cellspacing='0' style='max-width:600px;margin:0 auto;font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;'>
  <tr><td style='background:#3B3BFF;padding:28px 32px;text-align:center;'>
    <div style='font-size:22px;font-weight:700;color:#fff;'>Thank you, $name!</div>
  </td></tr>
  <tr><td style='padding:24px 32px;background:#fff;'>
    <p>We have received your enquiry regarding <b>$subject</b> and our team will get back to you within 24 hours.</p>
    <p><b>Your message:</b><br/>$messageHtml</p>
  </td></tr>
</table>";

$ownerSent = sendMail($gmailUser, $gmailPass, $ownerEmail,
    "New Enquiry: $name - $subject", $ownerHtml, $email);

sendMail($gmailUser, $gmailPass, $email,
    "We received your enquiry", $customerHtml);

$response = ['success' => $ownerSent];
if (!$ownerSent) {
    // TEMPORARY debug info — remove the line below once mail is working.
    $response['debug'] = $lastMailError;
}
echo json_encode($response);