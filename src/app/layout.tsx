import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "../components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chitwan.csitan.org.np"),
  title: {
    default: "CSITAN Chitwan",
    template: "%s | CSITAN Chitwan",
  },
  description:
    "Discover upcoming events by CSIT Association of Nepal – Chitwan. Join workshops, seminars, and activities to empower CSIT students and boost tech skills.",
  keywords: [
    "CSITAN",
    "chitwan",
    "it",
    "organization",
    "csit",
    "nepal",
    "programs",
    "events",
  ],
  openGraph: {
    type: "website",
    url: "https://chitwan.csitan.org.np",
    title: "CSITAN Chitwan",
    description:
      "Discover upcoming events by CSIT Association of Nepal – Chitwan. Join workshops, seminars, and activities to empower CSIT students and boost tech skills.",
    siteName: "CSITAN Chitwan",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "CSITAN Chitwan",
      },
    ],
  },

   twitter: {
    card: "summary_large_image",
    title: "CSITAN Chitwan",
    description:
      "Discover upcoming events by CSIT Association of Nepal – Chitwan. Join workshops, seminars, and activities to empower CSIT students and boost tech skills.",
    images: ["/logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}