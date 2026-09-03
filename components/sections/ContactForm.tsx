"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setError("Please fill all fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!validate()) return;

    setLoading(true);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://aditechinfo.com/kommoncanvas/mailer/send-message.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.timeout = 10000;

    xhr.onload = () => {
      setLoading(false);
      try {
        const result = JSON.parse(xhr.responseText);
        if (result.success) {
          setSubmitted(true);
          setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
        } else {
          setError(result.message || "Failed to send message.");
        }
      } catch {
        setError("Something went wrong. Please try again.");
      }
    };

    xhr.onerror = () => {
      setLoading(false);
      setError("Network error. Please try again.");
    };

    xhr.ontimeout = () => {
      setLoading(false);
      setError("Request timed out. Please try again.");
    };

    xhr.send(JSON.stringify(form));
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-neutral-800/90 p-10 text-center flex items-center flex-col justify-center">
        <p className="text-2xl font-bold text-white">Thanks — got it!</p>
        <p className="mt-3 text-neutral-400">
          We&rsquo;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem]  p-0 sm:p-10 md:mb-0 mb-0">
      {error && (
        <div className="mb-6 rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="md:mb-8 mb-3">
          <label htmlFor="fullName" className="text-sm font-semibold text-neutral-300">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your Name"
            className="mt-2 w-full rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
        <div className="md:mb-8 mb-3">
          <label htmlFor="email" className="text-sm font-semibold text-neutral-300">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="mt-2 w-full rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-neutral-300">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="1234567890"
            className="mt-2 w-full rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
        <div>
          <label htmlFor="subject" className="text-sm font-semibold text-neutral-300">
            Subject *
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={handleChange}
            placeholder="How we can help"
            className="mt-2 w-full rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-sm font-semibold text-neutral-300">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          value={form.message}
          onChange={handleChange}
          placeholder="How we can help"
          className="mt-2 w-full resize-none rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#ff0000] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-500 sm:w-auto disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Us a Message"}
      </button>
    </form>
  );
}
