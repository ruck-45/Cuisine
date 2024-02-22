import { Image } from "@nextui-org/react";
import img from "../assets/city.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PerfectMeal = () => {
  return (
    <div className="flex flex-col p-5 px-[4rem] lg:px-[6rem] bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
        <div className="md:mt-[5rem]">
          <h1 className="text-white text-3xl font-bold mb-5 md:mb-8">
            Delectable culinary inspirations <br />
            await!
          </h1>
          <p className="text-white text-md md:text-lg">
            From tantalizing rubs to irresistible glazes and crusts, our chefs expertly blend fire, smoke, salt, spice,
            and herbs to elevate your home-cooked meals to restaurant-quality perfection.
          </p>
          <Link to="../Recipes" className="flex items-center gap-2 md:gap-4 hover:gap-6 duration-100 text-white mt-8">
            <p className="font-bold text-lg md:text-xl">SEE ALL RECIPES</p>
            <FaArrowRightLong className="w-12 md:w-16 mt-1" />
          </Link>
        </div>
        <div className="flex flex-col relative top-[3rem]">
          <div className="flex flex-row ">
            <Image width={260} src={img} className="relative bottom-10 md:bottom-20" radius="none" />
            <Image width={150} src={img} className="relative top-3 left-3" radius="none" />
          </div>
          <div className="flex flex-row mt-5 md:mt-0">
            <Image width={150} src={img} className="relative left-10 bottom-10 md:left-20 md:bottom-20" radius="none" />
            <Image width={200} src={img} className="relative left-12 bottom-20 md:left-24 md:bottom-40" radius="none" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 mt-10 md:mt-20">
        <div className="flex flex-col relative top-[3rem]">
          <div className="flex flex-row">
            <Image width={260} src={img} className="relative bottom-10 md:bottom-20" radius="none" />
            <Image width={150} src={img} className="relative top-3 left-3" radius="none" />
          </div>
          <div className="flex flex-row mt-5 md:mt-0">
            <Image width={150} src={img} className="relative left-10 bottom-10 md:left-20 md:bottom-20" radius="none" />
            <Image width={200} src={img} className="relative left-12 bottom-20 md:left-24 md:bottom-40" radius="none" />
          </div>
        </div>
        <div className="md:mt-[5rem]">
          <h1 className="text-white text-3xl font-bold mb-5 md:mb-8">
            Indulge in mouthwatering <br />
            seafood!
          </h1>
          <p className="text-white text-md md:text-lg">
            Crafted with premium ingredients, our array of salmon, tilapia, cod, and crab offerings are bursting with
            flavor, delivering chef-inspired recipes effortlessly.
          </p>
          <Link to="../Products" className="flex items-center gap-2 md:gap-4 hover:gap-6 duration-100 text-white mt-8">
            <p className="font-bold text-lg md:text-xl">SEE ALL PRODUCTS</p>
            <FaArrowRightLong className="w-12 md:w-16 mt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PerfectMeal;
