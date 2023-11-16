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
    <html lang="en">
      <head>
        <link rel="icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/green">Green</Link>
          <Link href="/blue">Blue</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
