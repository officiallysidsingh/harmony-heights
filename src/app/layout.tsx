import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-w-[400px]">{children}</body>
    </html>
  );
}
