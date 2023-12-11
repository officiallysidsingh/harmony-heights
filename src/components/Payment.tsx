// @ts-nocheck
"use client";

import { useState } from "react";

// Font Import
import { courgette } from "@/ui/fonts";

// Tremor Import
import {
  Card,
  DateRangePickerValue,
  Flex,
  Metric,
  NumberInput,
  Text,
} from "@tremor/react";

// Next Auth Import
import { useSession } from "next-auth/react";

// Backend Import
import axios from "axios";

// Notification Toast Import
import { toast } from "sonner";

// Router Import
import { useRouter } from "next/navigation";

export default function Payment({
  totalDays,
  roomType,
  dateRange,
}: {
  totalDays: number;
  roomType: string;
  dateRange: DateRangePickerValue;
}) {
  const [cardNumber, setCardNumber] = useState();

  const { data: session } = useSession();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Loading Notification
    const toastId = toast.loading("Loading....");

    if (!cardNumber) {
      toast.error("Please fill all the fields", {
        id: toastId,
      });
      return;
    }

    const totalPrice = totalDays * (roomType === "deluxe" ? 23000 : 29000);

    const res = await axios
      .post("/api/payment", {
        userEmail: session?.user?.email,
        roomType,
        dateRange,
        totalDays,
        totalPrice,
      })
      .then((res) => res.data);

    // Notification Toast
    if (res.status === "OK") {
      // Successful response
      toast.success(res.message, {
        id: toastId,
      });

      // Redirecting to /profile
      router.replace("/profile");
    } else {
      // Unsuccessful response
      toast.error(res.message, {
        id: toastId,
      });
    }
  };

  return (
    <>
      <h1
        className={`text-4xl text-orange-300 font-bold ${courgette.className} antialiased`}
      >
        Payment
      </h1>
      <div className="pt-5 w-3/4 md:w-[30%]">
        <form onSubmit={handleSubmit}>
          <div className="text-xl md:text-2xl font-bold text-orange-300 flex flex-col gap-10">
            <div>
              <Card className="max-w-xl">
                <Flex>
                  <div>
                    <Text>No Of Days</Text>
                    <Metric>{totalDays}</Metric>
                  </div>
                  <div>
                    <Text>Cost Per Day</Text>
                    <Metric>
                      {roomType === "deluxe" ? (
                        <h3>&#8377; 23000</h3>
                      ) : (
                        <h3>&#8377; 29000</h3>
                      )}
                    </Metric>
                  </div>
                  <div>
                    <Text color="emerald">Total Cost</Text>
                    <Metric color="lime">
                      &#8377;{" "}
                      {totalDays * (roomType === "deluxe" ? 23000 : 29000)}
                    </Metric>
                  </div>
                </Flex>
              </Card>
            </div>
            <div>
              <h3 className="pl-2">Please Enter Your Card Number</h3>
              <NumberInput
                value={cardNumber}
                onValueChange={setCardNumber}
                className="py-2"
                enableStepper={false}
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex justify-center items-center w-full bg-action px-2 py-2 md:py-3 rounded-md cursor-pointer"
              >
                <h3 className="text-black md:text-xl font-bold">
                  Pay & Checkout
                </h3>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
