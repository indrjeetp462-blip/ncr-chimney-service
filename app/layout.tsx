import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chimney Service - 30 Min Arrival | Noida & Ghaziabad | 90 Day Warranty",
  description: "Faber, Glen, Kaff, Siemens, Hafele Chimney Service, Repair, Not Working, Noise, Installation, Cleaning Near Me in Noida Ghaziabad. Best chimney service, repair, installation, cleaning at same day.",
  manifest: "/manifest.json",
  themeColor: "#ff6600",
  applicationName: "Chimney Service Repair",
  keywords: [
    "faber chimney service",
    "faber chimney not working",
    "faber chimney repair",
    "faber chimney noise",
    "glen chimney service",
    "glen chimney not working",
    "glen chimney repair",
    "glen chimney noise",
    "kaff chimney service",
    "kaff chimney not working",
    "kaff chimney repair",
    "kaff chimney noise",
    "siemens chimney service",
    "siemens chimney not working",
    "siemens chimney repair",
    "siemens chimney noise",
    "hafele chimney service",
    "hafele chimney not working",
    "hafele chimney repair",
    "hafele chimney noise",
    "chimney service",
    "chimney repair",
    "chimney installation",
    "chimney cleaning"
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
        <meta name="google-site-verification" content="n3qt1n4VOu3Oh7e_YJ6IDTHqAPxuvlJeQlLtljIVSoU" />
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
