// @ts-nocheck
"use client";

// Font Import
import { courgette } from "@/ui/fonts";

// Form Input Import
import { DateRangePicker, Select, SelectItem } from "@tremor/react";

// Notification Toast Import
import { toast } from "sonner";

// Backend Imports
import axios from "axios";

export default function Availability({
  roomType,
  setRoomType,
  dateRange,
  setDateRange,
  setTotalDays,
  setPaymentScreen,
}) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Loading....");

    if (!roomType || !dateRange) {
      toast.error("Please fill all the fields", {
        id: toastId,
      });
      return;
    }

    const res = await axios
      .post("/api/availability", {
        roomType,
        // noOfRooms
      })
      .then((res) => res.data);

    // Notification Toast
    if (res.status === "OK") {
      // Total Days
      const oneDay = 24 * 60 * 60 * 1000; //hours*minutes*seconds*milliseconds
      const startDay = new Date(dateRange.from);
      const endDay = new Date(dateRange.to);

      setTotalDays(Math.round(Math.abs((startDay - endDay) / oneDay)) + 1);

      // Successful response
      toast.success(res.message, {
        id: toastId,
      });

      // Show dummy payment screen
      setPaymentScreen(true);
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
                <SelectItem value="deluxe">
                  Deluxe (&#8377; 23000/day, Double Bed)
                </SelectItem>
                <SelectItem value="premier">
                  Premier (&#8377; 29000/day, Twin Bed)
                </SelectItem>
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
            <button className="flex justify-center items-center w-full bg-action px-2 py-2 md:py-3 rounded-md cursor-pointer">
              <h3 className="text-black md:text-xl font-bold">
                Check Availability
              </h3>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
