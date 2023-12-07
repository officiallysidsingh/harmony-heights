import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony Heights",
  description: "A Simple Hotel Booking App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${caveat.className} antialiased`}>{children}</body>
    </html>
  );
}
