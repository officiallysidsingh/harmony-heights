// Font Import
import { courgette } from "@/ui/fonts";

// Image Import
import TwinBed from "@/public/deluxe.jpg";
import DoubleBed from "@/public/premier.jpg";

// Icons Import
import { CiWifiOn } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";
import { PiMonitor } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";

export default function RoomDesc() {
  return (
    <div className="flex flex-col">
      <div className="h-[34rem] md:h-[45rem] w-full flex flex-col-reverse md:flex-row justify-end items-center pt-5 md:pt-10 gap-5 md:gap-0">
        <div className="h-52 md:h-[38rem] w-3/4 md:w-1/3 flex flex-col md:justify-center">
          <div className="md:pl-10">
            <h1
              className={`${courgette.className} antialiased text-3xl md:text-7xl font-bold pb-2 md:pb-6`}
            >
              Deluxe Room
            </h1>
            <h2 className="text-sm md:text-lg text-justify">
              Unwind in the embrace of twin single beds, offering a cozy retreat
              tailored to your preferences.
              <br />
              Imbued with a sense of tranquility and style, the Premier Room
              ensures a restful stay enriched with modern amenities for a
              seamless and delightful experience.
            </h2>
            <div>
              <table className="table-fixed text-sm md:text-base">
                <tr>
                  <td className="p-2">
                    <CiWifiOn className="h-8 w-8" />
                  </td>
                  <td className="p-2">High Speed Wifi</td>

                  <td className="p-2">
                    <MdOutlineBed className="h-8 w-8" />
                  </td>
                  <td className="p-2">Cozy Twin Single Beds</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <PiMonitor className="h-8 w-8" />
                  </td>
                  <td className="p-2">Flat Screen TV</td>

                  <td className="p-2">
                    <BiDrink className="h-8 w-8" />
                  </td>
                  <td className="p-2">Mini Bar Offerings</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="w-3/4 md:w-2/3 flex justify-center items-center">
          <div
            className="h-52 md:h-[38rem] w-full md:w-3/4 bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${TwinBed.src})` }}
          ></div>
        </div>
      </div>
      <div className="h-[35rem] md:h-[45rem] w-full flex flex-col md:flex-row justify-start items-center py-5 md:py-10 gap-5 md:gap-0">
        <div className="w-3/4 md:w-2/3 flex justify-center items-center">
          <div
            className="h-52 md:h-[38rem] w-full md:w-3/4 bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${DoubleBed.src})` }}
          ></div>
        </div>
        <div className="h-52 md:h-[38rem] w-3/4 md:w-1/3 flex flex-col md:justify-center">
          <div className="md:pr-10">
            <h1
              className={`${courgette.className} antialiased text-3xl md:text-7xl font-bold pb-2 md:pb-6`}
            >
              Premier Room
            </h1>
            <h2 className="text-sm md:text-lg text-justify">
              Discover unparalleled luxury in our Deluxe Room at Harmony Heights
              Hotel.
              <br />
              Immerse yourself in the embrace of a spacious haven featuring a
              sumptuous double bed. Indulge in the perfect blend of
              sophistication and comfort, where every detail is meticulously
              crafted to elevate your stay.
            </h2>
            <div>
              <table className="table-fixed text-sm md:text-base">
                <tr>
                  <td className="p-2">
                    <CiWifiOn className="h-8 w-8" />
                  </td>
                  <td className="p-2">High Speed Wifi</td>

                  <td className="p-2">
                    <MdOutlineBed className="h-8 w-8" />
                  </td>
                  <td className="p-2">Luxurious Double Bed</td>
                </tr>
                <tr>
                  <td className="p-2">
                    <PiMonitor className="h-8 w-8" />
                  </td>
                  <td className="p-2">Flat Screen TV</td>

                  <td className="p-2">
                    <BiDrink className="h-8 w-8" />
                  </td>
                  <td className="p-2">Mini Bar Offerings</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
