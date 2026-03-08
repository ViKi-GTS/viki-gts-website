import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viki Global Tech Solutions | Vision + Knowledge",
  description: "Empowering small entrepreneurs globally through innovative SaaS, Cloud, and AI solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <footer className="py-12 px-6 border-t bg-white text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Viki Global Tech Solutions. All rights reserved.</p>
          <p className="mt-2 text-blue-600 font-medium">Vision + Knowledge</p>
        </footer>
      </body>
    </html>
  );
}
