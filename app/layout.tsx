import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="KUpOaI7VAFzvOndO3ySn_SzMurazhYs4YpTJL0Lh8RA" />
      </head>
      <body>{children}</body>
    </html>
  );
}
