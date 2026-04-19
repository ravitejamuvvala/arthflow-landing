import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ArthFlow — Your Monthly Money Operating System",
  description: "ArthFlow is your personal money operating system. It tells you exactly what to fix, where to save, and how to grow — every single month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-950" suppressHydrationWarning>{children}</body>
    </html>
  );
}
