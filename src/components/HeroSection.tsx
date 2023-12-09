// Image Import
import HeroImage from "@/public/entrance.jpg";

// Font Imports
import { Courgette } from "next/font/google";

const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroSection() {
  return (
    <div className="bg-gray-800 flex h-72 md:h-[38rem] justify-center items-center flex-col">
      <div
        className="w-full h-72 md:h-[38rem] bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="w-full h-72 md:h-[38rem] flex flex-col justify-center items-start backdrop-brightness-50">
          <h3
            className={`text-slate-200 text-2xl md:text-6xl pl-4 md:pl-10 pt-36 md:pt-96 ${courgette.className} font-semibold antialiased`}
          >
            Elevate&nbsp;Your&nbsp;Stay&nbsp;to
          </h3>
          <h3
            className={`text-slate-200 text-2xl md:text-6xl pl-4 md:pl-10 ${courgette.className} font-semibold antialiased`}
          >
            Serenity&nbsp;and&nbsp;Sophistication
          </h3>
          <div className="pt-1 md:pt-2 pl-4 md:pl-10">
            <div className="bg-action px-2 py-1 rounded-md cursor-pointer">
              <h3 className="text-black text-sm md:text-lg font-semibold">
                Book Now
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
