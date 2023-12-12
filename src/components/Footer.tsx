// React Icons
import { IoMdHeart } from "react-icons/io";

// Font Import
import { courgette } from "@/ui/fonts";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full flex flex-col justify-center items-center bg-[#7287fd] py-5 gap-1">
      <div
        className={`flex text-3xl font-bold ${courgette.className} antialiased`}
      >
        Made with <IoMdHeart className="h-8 w-10 text-red-600" /> by Siddharth
      </div>
      <div className="">&#169; Copyright of Harmony Heights</div>
    </footer>
  );
}
