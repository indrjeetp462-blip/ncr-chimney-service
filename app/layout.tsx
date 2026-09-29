import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chimney Service Noida & Ghaziabad | Faber, Glen, Kaff, Hafele, Siemens",
  description: "Expert Chimney Service for Faber, Glen, Kaff, Siemens & Hafele in Noida & Ghaziabad. Repair, Cleaning & Installation in 30 Min + 90 Day Warranty.",
  manifest: "/manifest.json",
  themeColor: "#ff6600",
  applicationName: "Chimney Service Repair",
  keywords: [
    "faber chimney service",
    "glen chimney service", 
    "kaff chimney service",
    "siemens chimney service",
    "hafele chimney service",
    "chimney service noida"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="n3qt1n4VDu3O7h3e_YJ6IDtHqAPxvu1JeQiL1jIV5oU" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff6600" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
