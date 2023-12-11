import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

// Next Auth Session Provider
import AuthProvider from "@/context/NextAuthProvider/providers";

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
      <body className="min-w-[450px]">
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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
