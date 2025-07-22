import Masonry from '../components/Masonry';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DotGrid from '../components/DotGrid';

const PicturesPage = () => {
  const items = [
    {
      id: "1",
      img: "/images/climb.JPG",
      url: "/images/climb.JPG",
      height: 400,
    },
    {
      id: "2",
      img: "/images/IMG_0603.jpg",
      url: "/images/IMG_0603.jpg",
      height: 250,
    },
    {
      id: "3",
      img: "/images/climber.jpg",
      url: "/images/climber.jpg",
      height: 600,
    },
    {
      id: "4",
      img: "/images/colors.JPG",
      url: "/images/colors.JPG",
      height: 400,
    },
    {
      id: "5",
      img: "/images/friends.jpg",
      url: "/images/friends.jpg",
      height: 250,
    },
    {
      id: "6",
      img: "/images/kirbeter.jpg",
      url: "/images/kirbeter.jpg",
      height: 300,
    },
        {
      id: "7",
      img: "/images/guardsman.jpg",
      url: "/images/guardsman.jpg",
      height: 300,
    },
    {
      id: "8",
      img: "/images/no-park.jpg",
      url: "/images/no-park.jpg",
      height: 300,
    },
    {
      id: "9",
      img: "/images/old.jpg",
      url: "/images/old.jpg",
      height: 300,
    },
    {
      id: "10",
      img: "/images/sitting.jpg",
      url: "/images/sitting.jpg",
      height: 300,
    },
    {
      id: "11",
      img: "/images/telephone.jpg",
      url: "/images/telephone.jpg",
      height: 300,
    },
    {
      id: "12",
      img: "/images/vansire.jpg",
      url: "/images/vansire.jpg",
      height: 300,
    },
    {
      id: "13",
      img: "/images/yuna.jpg",
      url: "/images/yuna.jpg",
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
          style={{ width: '100%', height: '100%' }} // Force dimensions
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-[20%_60%_20%] min-h-screen">
        {/* Left column */}
        <div></div>

        {/* Center column */}
        
        <div className="flex flex-col items-center">
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
            <Footer />
        </div>

        {/* Right column */}
        <div></div>
      </div>
    </div>
  );
};

export default PicturesPage;
