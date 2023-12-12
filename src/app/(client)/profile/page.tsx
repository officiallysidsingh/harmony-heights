"use client";

import { useEffect, useState } from "react";

// Component Import
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Next Auth Import
import { useSession } from "next-auth/react";

// Font Import
import { ephesis, parisienne } from "@/ui/fonts";

// Backend Import
import axios from "axios";

// Tremor Import
import { Card, Flex, Text, Title } from "@tremor/react";

// Notification Toast Import
import { toast } from "sonner";

export default function Profile() {
  const [userHistory, setUserHistory] = useState<any[]>();

  const { data: session } = useSession();

  useEffect(() => {
    async function fetchData() {
      const res = await axios
        .post("/api/profileData", {
          email: session?.user?.email,
        })
        .then((res) => res.data);
      setUserHistory(res.userHistory);

      if (res.status !== "OK") {
        toast.error("No Booking History Found");
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <Navbar buttonType="Log Out" />
      <div className="w-full pt-5">
        <div
          className={`flex flex-col justify-center items-center gap-2 ${ephesis.className} text-fuchsia-600 antialiased pb-10 md:pb-20`}
        >
          <h1 className="text-3xl md:text-6xl font-bold">
            Hey, {session?.user?.name}
          </h1>
          <h2 className="text-3xl md:text-6xl font-semibold">
            Welcome to the Profile Section
          </h2>
        </div>
        <div
          className={`${parisienne.className} antialiased pb-5 md:ml-4 flex justify-center md:justify-start`}
        >
          <h1 className="text-2xl md:text-6xl font-semibold text-purple-700">
            Booking History
          </h1>
        </div>
        {userHistory?.map((data: any) => (
          <div className="mx-auto w-5/6 md:w-2/3 md:ml-4 ">
            <Card className="max-w-xl mb-5">
              <Flex>
                <div>
                  <Text>Room Type</Text>
                  <Title>
                    {data.roomType[0].toUpperCase()}
                    {data.roomType.slice(1)}
                  </Title>
                </div>
                <div>
                  <Text>From Date</Text>
                  <Title>
                    {new Date(data.dateRange.from).getDate()}/
                    {new Date(data.dateRange.from).getMonth() + 1}/
                    {new Date(data.dateRange.from)
                      .getFullYear()
                      .toString()
                      .slice(-2)}
                  </Title>
                </div>
                <div>
                  <Text>To Date</Text>
                  <Title>
                    {new Date(data.dateRange.to).getDate()}/
                    {new Date(data.dateRange.to).getMonth() + 1}/
                    {new Date(data.dateRange.from)
                      .getFullYear()
                      .toString()
                      .slice(-2)}
                  </Title>
                </div>
                <div>
                  <Text color="emerald">Total Price</Text>
                  <Title color="emerald">&#8377; {data.totalPrice}</Title>
                </div>
              </Flex>
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
