import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import RoomDesc from "@/components/RoomDesc";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar buttonType={"Login"} />
      <HeroSection />
      <About />
      <RoomDesc />
      <Footer />
    </div>
  );
}
