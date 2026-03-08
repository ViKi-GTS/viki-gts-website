import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viki Global Tech Solutions | Vision + Knowledge",
  description: "Empowering small entrepreneurs through SaaS and Digital Transformation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Linking your template's CSS files */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
