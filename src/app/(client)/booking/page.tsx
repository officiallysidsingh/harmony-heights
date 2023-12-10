"use client";

import { useState } from "react";

// Image Import
import BookingBg from "@/public/bg-booking-form.jpg";

// Font Import
import { courgette } from "@/ui/fonts";

// Form Input Import
import { Select, SelectItem } from "@tremor/react";
import { DateRangePicker, DateRangePickerValue } from "@tremor/react";

// Router Import
import { useRouter } from "next/navigation";

export default function booking() {
  const [roomType, setRoomType] = useState("");
  const [dateRange, setDateRange] = useState<DateRangePickerValue>();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    router.replace("/payment");
  };

  return (
    <div className="h-[100vh] bg-gray-800 flex justify-center items-center flex-col">
      <div
        className="h-[100vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BookingBg.src})` }}
      >
        <div className="h-[100vh] w-full flex flex-col justify-start pt-20 md:pt-0 md:justify-center items-center backdrop-brightness-50 backdrop-filter backdrop-blur-md">
          <h1
            className={`text-4xl text-orange-300 font-bold ${courgette.className} antialiased`}
          >
            Book Your Stay
          </h1>
          <div className="pt-5 w-3/4 md:w-1/5">
            <form onSubmit={handleSubmit}>
              <div className="text-xl md:text-2xl font-bold text-orange-300 flex flex-col gap-4">
                <div>
                  <h3 className="pl-2">Room Type</h3>
                  <Select
                    className="text-xl"
                    value={roomType}
                    onValueChange={setRoomType}
                  >
                    <SelectItem value="deluxe">Deluxe Room</SelectItem>
                    <SelectItem value="premier">Premier Room</SelectItem>
                  </Select>
                </div>
                <div className="flex flex-col">
                  <h3 className="pl-2">Stay Duration</h3>
                  <DateRangePicker
                    className="text-xl w-full"
                    value={dateRange}
                    onValueChange={setDateRange}
                    enableSelect={false}
                    minDate={new Date()}
                  ></DateRangePicker>
                </div>
                <button
                  type="submit"
                  className="flex justify-center items-center w-full bg-action px-2 py-2 md:py-3 rounded-md cursor-pointer"
                >
                  <h3 className="text-black md:text-xl font-bold">Book Now</h3>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
