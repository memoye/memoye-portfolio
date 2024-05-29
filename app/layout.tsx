import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "%s | Brown Memoye",
    default: "Brown Memoye - Frontend Developer",
  },
  description:
    "A curious, detail-oriented, and passionate frontend developer with a knack for crafting clean, efficient, and accessible user interfaces. Unleashing the full potential of web technologies to create engaging and seamless experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
