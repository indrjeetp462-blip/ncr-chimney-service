import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chimney Service Repair - Near Me in Noida Ghaziabad Delhi",
  description: "Best Chimney repair or service near me in Noida, Ghaziabad & Delhi NCR, Same Day Service.",
  manifest: "/manifest.json",
  themeColor: "#ff6600",
  applicationName: "Chimney Service Repair",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="NJQuOa7WoVoDy3Dm_EdMucxe1YaTp6L6ICIMBA" />
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
