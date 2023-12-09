import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

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
      <body className="min-w-[400px]">
        <Toaster
          richColors
          position="top-center"
          toastOptions={{
            style: {
              boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            },
            duration: 3000,
          }}
        />
        {children}
      </body>
    </html>
  );
}
