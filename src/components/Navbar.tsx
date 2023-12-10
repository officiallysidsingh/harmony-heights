"use client";

import { useState, useEffect } from "react";

// Font Import
import { ephesis } from "@/ui/fonts";

// Router Import
import Link from "next/link";

// Next Auth Import
import { signOut } from "next-auth/react";

export default function Navbar({ buttonType }: { buttonType: string }) {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 270) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow("top");
    }
  };

  const logoutRedirect = () => {
    signOut();
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`z-50 w-full text-slate-100 transition-all ease-in-out duration-500 ${buttonType === "Login"
          ? show === "top"
            ? "fixed"
            : show === "show"
              ? "fixed backdrop-filter backdrop-blur-sm bg-opacity-50 bg-black"
              : "fixed -translate-y-20"
          : show === "top"
            ? "sticky backdrop-filter backdrop-blur-lg bg-opacity-90 bg-black"
            : ""
        } `}
    >
      <div className="flex justify-between items-center pt-2 pb-1 px-6 md:px-12">
        <div className={`flex flex-col ${ephesis.className} antialiased`}>
          <h2 className="text-2xl md:text-3xl font-bold text-action">
            Harmony
          </h2>
          <h2 className="text-xl md:text-2xl font-bold">Heights</h2>
        </div>
        <div className="flex justify-between items-center gap-5 font-semibold">
          {buttonType === "Log Out" ? (
            <div
              onClick={logoutRedirect}
              className="border-2 border-action px-5 py-1.5 hover:bg-action hover:text-black rounded-md cursor-pointer"
            >
              <h3 className="font-semibold">{buttonType}</h3>
            </div>
          ) : (
            <Link
              href={{
                pathname: "/login",
                query: {
                  fromBooking: false,
                },
              }}
              className="border-2 border-action px-5 py-1.5 hover:bg-action hover:text-black rounded-md cursor-pointer"
            >
              <h3 className="font-semibold">{buttonType}</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
