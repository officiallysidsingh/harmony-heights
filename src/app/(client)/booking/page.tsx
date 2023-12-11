"use client";

import { useState } from "react";

// Image Import
import BookingBg from "@/public/bg-booking-form.jpg";

// Tremor Import
import { DateRangePickerValue } from "@tremor/react";

// Screens Import
import Payment from "@/components/Payment";
import Availability from "@/components/Availability";

export default function booking() {
  const [paymentScreen, setPaymentScreen] = useState(false);
  const [roomType, setRoomType] = useState("");
  const [dateRange, setDateRange] = useState<DateRangePickerValue>();
  const [totalDays, setTotalDays] = useState(0);

  return (
    <div className="h-[100vh] bg-gray-800 flex justify-center items-center flex-col">
      <div
        className="h-[100vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BookingBg.src})` }}
      >
        <div className="h-[100vh] w-full flex flex-col justify-start pt-20 md:pt-0 md:justify-center items-center backdrop-brightness-50 backdrop-filter backdrop-blur-md">
          {paymentScreen ? (
            <Payment
              totalDays={totalDays}
              roomType={roomType}
              dateRange={dateRange}
            />
          ) : (
            <Availability
              roomType={roomType}
              setRoomType={setRoomType}
              dateRange={dateRange}
              setDateRange={setDateRange}
              setTotalDays={setTotalDays}
              setPaymentScreen={setPaymentScreen}
            />
          )}
        </div>
      </div>
    </div>
  );
}
