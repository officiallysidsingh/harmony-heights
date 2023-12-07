// Font Import
import { Ephesis } from "next/font/google";

const whisper = Ephesis({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full text-slate-100 backdrop-filter bg-opacity-50">
      <div className="flex justify-between items-center py-4 px-10">
        <div className={`flex flex-col ${whisper.className} antialiased`}>
          <h2 className="text-3xl font-bold text-[#FDA63D]">Harmony</h2>
          <h2 className="text-2xl font-bold">Heights</h2>
        </div>
        <div className="flex justify-between items-center gap-5 font-semibold">
          <div className="bg-[#FDA63D] text-black p-2 rounded-md">Book Now</div>
          <div className="border-2 border-[#FDA63D] px-5 py-1.5 hover:bg-[#FDA63D] hover:text-black rounded-md">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
