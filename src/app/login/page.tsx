"use client";

import React, { useState } from "react";
import Link from "next/link";

// Image Import
import LoginImage from "@/public/login-register-bg.jpg";

// Next-Auth Import
import { signIn } from "next-auth/react";

// Router Import
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

// Notification Toast Import
import { toast } from "sonner";

// Font Import
import { parisienne } from "@/ui/fonts";

export default function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Notification Toast
    // Loading State
    const toastId = toast.loading("Loading....");

    // Check if fields are empty
    if (!email || !password) {
      toast.error("Please fill all the fields!", {
        id: toastId,
      });
      return;
    }

    const res: any = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // Notification Toast
    if (res.error) {
      // Unsuccessful response
      toast.error("Invalid Credentials", {
        id: toastId,
      });
    } else {
      // Successful response
      toast.success("Login Successful", {
        id: toastId,
      });

      // Redirect to payment page
      // If request coming via booking page
      const fromBooking: any = searchParams.get("fromBooking");
      if (fromBooking === "true") {
        router.push("/booking");
      } else {
        router.push("/redirect");
      }
    }
  };

  return (
    <div
      className="h-[100vh] w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${LoginImage.src})` }}
    >
      <div className="z-10 h-[100vh] w-full flex justify-center items-center">
        <div className="h-[33rem] md:h-[40rem] w-80 md:w-[35rem] bg-neutral-800 backdrop-filter backdrop-blur-md bg-opacity-50 rounded-2xl border-r border-b border-neutral-700">
          <div className="flex justify-center pt-5 md:pt-10">
            <h2
              className={`${parisienne.className} antialiased text-5xl md:text-7xl font-bold text-slate-50`}
            >
              Login
            </h2>
          </div>
          <div className="pt-12 md:pt-20">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center gap-5">
                <input
                  placeholder="Enter Your Email"
                  type="email"
                  className="w-4/5 h-14 bg-opacity-0 bg-white text-white border-b focus:border-b-2 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  placeholder="Enter Your Password"
                  type="password"
                  className="w-4/5 h-14 bg-opacity-0 bg-white text-white border-b focus:border-b-2 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-center pt-12 md:pt-16">
                <button
                  type="submit"
                  className="w-5/6 bg-slate-100 px-14 py-5 rounded-lg md:text-xl"
                >
                  Login
                </button>
              </div>
            </form>
            <h3 className="flex justify-center pt-5 gap-1 text-base md:text-xl text-slate-50">
              Don't have an account?
              <Link href="/register" className="text-blue-400">
                {" "}
                Register
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
