// Font Import
import { Ephesis } from "next/font/google";

const ephesis = Ephesis({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full text-slate-100 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-black">
      <div className="flex justify-between items-center pt-2 pb-1 px-6 md:px-12">
        <div className={`flex flex-col ${ephesis.className} antialiased`}>
          <h2 className="text-2xl md:text-3xl font-bold text-action">
            Harmony
          </h2>
          <h2 className="text-xl md:text-2xl font-bold">Heights</h2>
        </div>
        <div className="flex justify-between items-center gap-5 font-semibold">
          <div className="border-2 border-action px-5 py-1.5 hover:bg-action hover:text-black rounded-md cursor-pointer">
            <h3 className="font-semibold">Login</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
