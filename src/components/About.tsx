// Image Import
import AboutImage from "@/public/luxury-room.jpg";

// Font Import
import { courgette } from "@/ui/fonts";

export default function About() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center py-5 md:py-10 gap-5 md:gap-0">
      <div className="w-3/4 md:w-1/2 flex justify-center items-center">
        <div
          className="h-52 md:h-[38rem] w-full md:w-3/4 bg-cover bg-right bg-no-repeat rounded-lg"
          style={{ backgroundImage: `url(${AboutImage.src})` }}
        ></div>
      </div>
      <div className="h-52 md:h-[38rem] w-3/4 md:w-1/2 flex flex-col md:justify-center">
        <div className="md:pr-10">
          <h1
            className={`${courgette.className} antialiased text-3xl md:text-7xl font-bold pb-2 md:pb-6`}
          >
            About Us
          </h1>
          <h2 className="text-sm md:text-lg text-justify">
            Immerse yourself in the legacy of timeless hospitality at Harmony
            Heights Hotel, where for two glorious decades, we have perfected the
            art of creating memorable experiences.
            <br />
            Our journey spans 20 years of unwavering commitment to providing
            unparalleled comfort and sophistication, inviting guests to indulge
            in the rich tapestry of our heritage.
            <br />
            Welcome to a sanctuary where tradition meets modern luxury, crafted
            over two decades of dedicated service in the heart of Delhi NCR.
          </h2>
        </div>
      </div>
    </div>
  );
}
