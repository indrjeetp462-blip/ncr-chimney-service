import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chimney Service in Noida & Ghaziabad - 30 Min Visit | 90 Day Warranty",
  description: "Chimney Service in Noida & Ghaziabad - Same Day, 45 Min Arrival, 30 Day Warranty. Call 8796284796",
  manifest: "/manifest.json",
  themeColor: "#ff6600",
  applicationName: "Chimney Service Noida",
};
export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="n3qt1n4VDu3O7h3e_YJ6IDtHqAPxvu1JeQiL1jIV5oU" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff6600" />
      </head>
      <body>{children}</body>
    </html>
  );
}
