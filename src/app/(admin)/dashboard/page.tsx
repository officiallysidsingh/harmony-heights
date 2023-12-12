"use client";

import { useEffect, useState } from "react";

// Component Import
import Navbar from "@/components/Navbar";
import HotelData from "@/components/HotelData";
import RegisteredUserData from "@/components/RegisteredUserData";
import BookingHistory from "@/components/BookingHistory";
import Footer from "@/components/Footer";

// Next Auth Import
import { useSession } from "next-auth/react";

// Font Import
import { ephesis } from "@/ui/fonts";

// Backend Import
import axios from "axios";

export default function Dashboard() {
  const [adminData, setAdminData] = useState<any>();

  const { data: session } = useSession();

  useEffect(() => {
    async function fetchData() {
      const res = await axios
        .post("/api/adminData", {
          email: session?.user?.email,
        })
        .then((res) => res.data);
      setAdminData(res);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar buttonType={"Log Out"} />
      <div className="w-full pt-5 flex flex-col gap-5">
        <div
          className={`flex flex-col justify-center items-center gap-2 ${ephesis.className} text-fuchsia-600 antialiased pb-5`}
        >
          <h1 className="text-3xl md:text-6xl font-bold">
            Hey, {session?.user?.name}
          </h1>
          <h2 className="text-3xl md:text-6xl font-semibold">
            Welcome to the Admin Panel
          </h2>
        </div>
        <HotelData adminData={adminData} />
        <RegisteredUserData adminData={adminData} />
        <BookingHistory adminData={adminData} />
      </div>
      <Footer />
    </>
  );
}
