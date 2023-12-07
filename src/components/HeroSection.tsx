// Image Import
import HeroImage from "../public/entrance.jpg";

// Font Imports
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });

export default function HeroSection() {
  return (
    <div className="bg-gray-800 flex h-72 md:h-[38rem] justify-center items-center flex-col">
      <div
        className="w-full h-72 md:h-[38rem] bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div
          className={`w-full h-72 md:h-[38rem] flex flex-col justify-end items-start pb-6 md:pb-14 backdrop-brightness-50 ${caveat.className} font-semibold antialiased`}
        >
          <h3 className="text-slate-200 text-3xl md:text-7xl pl-4 md:pl-10">
            Elevate&nbsp;Your&nbsp;Stay&nbsp;to
          </h3>
          <h3 className="text-slate-200 text-3xl md:text-7xl pl-4 md:pl-10">
            Serenity&nbsp;and&nbsp;Sophistication
          </h3>
        </div>
      </div>
    </div>
  );
}
