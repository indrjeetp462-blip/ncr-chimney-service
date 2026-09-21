import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chimney Service Center in Noida Ghaziabad - Not Working Repair @Home",
  description: "Best Chimney Service Center in Noida, Ghaziabad & Delhi NCR. Chimney Not Working? Same Day Repair, Cleaning & Service at Home. Call 8796284796",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="KUp0a17WAFzvOnD3ySn_SzMuzrazhYs4YpTJLOIhN8A" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
