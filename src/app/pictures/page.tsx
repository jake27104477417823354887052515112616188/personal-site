"use client";

import Masonry from '../components/Masonry';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DotGrid from '../components/DotGrid';

const PicturesPage = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/personal-site' : '';

  const items = [
    {
      id: "1",
      img: `${basePath}/images/climb.JPG`,
      url: `${basePath}/images/climb.JPG`,
      height: 400,
    },
    {
      id: "2",
      img: `${basePath}/images/IMG_0603.jpg`,
      url: `${basePath}/images/IMG_0603.jpg`,
      height: 250,
    },
    {
      id: "3",
      img: `${basePath}/images/climber.jpg`,
      url: `${basePath}/images/climber.jpg`,
      height: 600,
    },
    {
      id: "4",
      img: `${basePath}/images/colors.JPG`,
      url: `${basePath}/images/colors.JPG`,
      height: 400,
    },
    {
      id: "5",
      img: `${basePath}/images/friends.jpg`,
      url: `${basePath}/images/friends.jpg`,
      height: 250,
    },
    {
      id: "6",
      img: `${basePath}/images/kirbeter.jpg`,
      url: `${basePath}/images/kirbeter.jpg`,
      height: 300,
    },
    {
      id: "7",
      img: `${basePath}/images/guardsman.jpg`,
      url: `${basePath}/images/guardsman.jpg`,
      height: 300,
    },
    {
      id: "8",
      img: `${basePath}/images/no-park.jpg`,
      url: `${basePath}/images/no-park.jpg`,
      height: 300,
    },
    {
      id: "9",
      img: `${basePath}/images/old.jpg`,
      url: `${basePath}/images/old.jpg`,
      height: 300,
    },
    {
      id: "10",
      img: `${basePath}/images/sitting.jpg`,
      url: `${basePath}/images/sitting.jpg`,
      height: 300,
    },
    {
      id: "11",
      img: `${basePath}/images/telephone.jpg`,
      url: `${basePath}/images/telephone.jpg`,
      height: 300,
    },
    {
      id: "12",
      img: `${basePath}/images/vansire.jpg`,
      url: `${basePath}/images/vansire.jpg`,
      height: 300,
    },
    {
      id: "13",
      img: `${basePath}/images/yuna.jpg`,
      url: `${basePath}/images/yuna.jpg`,
      height: 300,
    },
  ];

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
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="grid grid-cols-[20%_60%_20%] min-h-screen">
        {/* Left column */}
        <div></div>

        {/* Center column */}
        <div className="relative flex flex-col items-center z-10">
          <Navbar />
          <Masonry
            items={items}
            ease="power3.out"
            duration={1}
            stagger={0.25}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
          <Footer className="relative z-20" />
        </div>

        {/* Right column */}
        <div></div>
      </div>
    </div>
  );
};

export default PicturesPage;
