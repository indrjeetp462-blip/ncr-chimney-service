import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chimney Service Repair Near Me in Noida Ghaziabad - Service, Repair, Cleaning, Not Working",
  description: "Chimney Service Repair Near Me in Noida Ghaziabad. Expert for chimney service, chimney repair, chimney not working, chimney repair near me, chimney service near me, chimney cleaning Ghaziabad, chimney service Noida. Same day doorstep service in Jaypee Greens, Sector 150, Wishtown 128, Indirapuram, Vaishali Sec 5, Raj Nagar.",
  manifest: "manifest.json",
  themeColor: "#ff6600",
  applicationName: "Chimney Service Repair",
  keywords: ["chimney service", "chimney repair", "chimney not working", "chimney repair near me", "chimney service near me", "chimney cleaning ghaziabad", "chimney service noida", "chimney repair noida ghaziabad"],
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
