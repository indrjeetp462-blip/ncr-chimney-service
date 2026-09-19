import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chimney Service in Noida & Ghaziabad | Repair, Cleaning - NCR Chimney Service",
  description: "Best Chimney Service in Noida, Ghaziabad & Delhi NCR. Expert kitchen chimney repair, service & cleaning. Same day service. Call NCR Chimney Service now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="KUpOaI7VAFzvOndO3ySn_SzMurazhYs4YpTJLOlh8RA" />
      </head>
      <body>{children}</body>
    </html>
  );
}
