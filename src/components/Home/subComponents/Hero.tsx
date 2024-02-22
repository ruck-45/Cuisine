import vid from "../assets/Hero.mp4";
import "./Home.css";
const Hero = () => {
  return (
    <div
      className="flex flex-col
     justify-center items-center h-[60vh] md:h-[75vh] lg:h-[90vh] bg-black/90 text-white font-bold text-3xl md:text-5xl text-center p-[1rem] top-0 left-0 relative"
    >
      <video autoPlay loop muted className="absolute min-h-full min-w-full">
        <source src={vid} type="video/mp4" />
      </video>
      <h1 className="z-[2]">SAVOR PREMIUM SEAFOOD</h1>
      <h1 className="z-[2]">ELEVATE WITH FINEST INGREDIENTS</h1>
      <h1 className="font-normal mt-4 z-[2]">LIVE BOLDLY. COOK ASSUREDLY</h1>
    </div>
  );
};

export default Hero;
