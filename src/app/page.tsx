import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import DotGrid from "./components/DotGrid";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#202020"
          activeColor="#7c98c9"
          proximity={70}
          shockRadius={100}
          shockStrength={3}
          resistance={750}
          returnDuration={1.5}
          style={{ width: '100%', height: '100%' }} // Force dimensions
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10 min-h-screen">
        {/* Grid Layout */}
        <div className="grid grid-cols-[20%_60%_20%] min-h-screen">
          {/* Left column */}
          <div></div>

          {/* Center column */}
          <div className="flex flex-col items-center">
            <Navbar />
            <About />
            <Footer/>
          </div>

          {/* Right column */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
