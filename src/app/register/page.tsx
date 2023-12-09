"use client";

import React, { useState } from "react";
import Link from "next/link";

// Image Import
import RegisterImage from "../../public/login-register-bg.png";

// Backend Import
import axios from "axios";

// Font Import
import { Parisienne } from "next/font/google";

// Notification Toast Import
import { toast } from "sonner";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Notification Toast
    // Loading State
    toast.loading("Loading....");

    const res = await axios
      .post("/user/register", {
        name,
        email,
        password,
      })
      .then((res) => res.data);

    // Notification Toast
    if (res.status === "OK") {
      // Successful response
      toast.success(res.message);

      // Clearing Out Form Data On Submit
      setName("");
      setEmail("");
      setPassword("");
    } else {
      // Unsuccessful response
      toast.error(res.message);
    }
  };

  return (
    <div
      className="h-[100vh] w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${RegisterImage.src})` }}
    >
      <div className="z-10 h-[100vh] w-full flex justify-center items-center">
        <div className="h-[33rem] md:h-[40rem] w-80 md:w-[35rem] bg-neutral-800 backdrop-filter backdrop-blur-md bg-opacity-50 rounded-2xl border-r border-b border-neutral-700">
          <div className="flex justify-center pt-5 md:pt-10">
            <h2
              className={`${parisienne.className} antialiased text-5xl md:text-7xl font-bold text-slate-50`}
            >
              Register
            </h2>
          </div>
          <div className="pt-12 md:pt-20">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center gap-5">
                <input
                  placeholder="Enter Your Full Name"
                  type="text"
                  className="w-4/5 h-14 bg-opacity-0 bg-white text-white border-b focus:border-b-2 focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                  Sign Up
                </button>
              </div>
            </form>
            <h3 className="flex justify-center pt-5 gap-1 text-base md:text-xl text-slate-50">
              Have an account?
              <Link href="/login" className="text-blue-400">
                {" "}
                Login
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
