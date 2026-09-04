import type { Metadata, Viewport } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import "./globals.css";
import CustomCursor from "@/components/sections/CustomCursor";
import WhatsAppFloat from '@/components/sections/Whatsapp';


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DEFAULT_TITLE = "Kommon Canvas | Packaging & Brand Design Agency";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Kommon Canvas",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "packaging design agency",
    "brand identity design",
    "brand strategy",
    "product packaging design",
    "logo design agency",
    "digital experience design",
    "Kommon Canvas",
  ],
  authors: [{ name: "Kommon Canvas" }],
  creator: "Kommon Canvas",
  publisher: "Kommon Canvas",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  // Icons are picked up automatically by Next.js from the file-convention
  // icons in app/ (favicon.ico, icon.png, apple-icon.png) — no manual
  // `icons` field needed here, and adding one would duplicate the tags.
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Kommon Canvas",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/apple-touch-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
        <CustomCursor />
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
