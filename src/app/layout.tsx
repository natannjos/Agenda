import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agenda",
  description: "Agenda para compromissos",
  manifest: "/manifest.json",
  icons: ["/icon-192x192.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-gray-900 bg-gray-100 ">
      <head>
        <link rel="icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="flex w-full h-full">{children}</body>
    </html>
  );
}
