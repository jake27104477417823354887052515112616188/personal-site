import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="grid grid-cols-[20%_60%_20%] min-h-screen">
    {/* Left column */}
    <div></div>

    {/* Center column */}
    <div className="flex flex-col items-center dark:">
      <Navbar />
      <About />
      {/* <Footer /> */}
    </div>

    {/* Right column */}
    <div></div>
  </div>
  );
}
