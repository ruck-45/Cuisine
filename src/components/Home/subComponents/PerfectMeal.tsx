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
            <Image
              width={220}
              src="https://img.freepik.com/free-photo/young-couple-having-breakfast_23-2148079671.jpg?t=st=1708609769~exp=1708613369~hmac=bb9b402e223f8c8f930f172ebc88bf4b5bd6fa45b9c6c7ce170e449454f2ffad&w=360"
              className="relative bottom-10 md:bottom-20"
              radius="none"
            />
            <Image
              width={190}
              src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?t=st=1708772446~exp=1708776046~hmac=38db2c5814aad72e4230d32b20412de3567d1b76d4e0034b36e7b4823c591f93&w=1060"
              className="relative top-5 left-3"
              radius="none"
            />
          </div>
          <div className="flex flex-row mt-5 md:mt-0">
            <Image
              width={150}
              src="https://img.freepik.com/free-photo/deep-fried-wonton-dark-surface_1150-43553.jpg?t=st=1708772510~exp=1708776110~hmac=c65e7a19fe98c60548721062bf86e2d5ea7585d9df9551d6465d0af32a431ef5&w=996"
              className="relative left-10  bottom-10 md:left-20 md:bottom-20"
              radius="none"
            />
            <Image
              width={200}
              src="https://img.freepik.com/free-photo/meat-dish-with-vegetables_144627-18092.jpg?t=st=1708610040~exp=1708613640~hmac=8de7dfc4164ea4ab8b4bb7175c9a56805e2a1425caf41756b7595e243cd06166&w=996"
              className="relative left-12 bottom-20 md:left-24 md:bottom-40"
              radius="none"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 mt-10 md:mt-20">
        <div className="flex flex-col relative top-[3rem]">
          <div className="flex flex-row">
            <Image
              width={260}
              src="https://img.freepik.com/free-photo/food-girl-kitchen_144627-5202.jpg?t=st=1708772582~exp=1708776182~hmac=16d28153222777a1bb155be6e8c46a2c48cf0b5aaa1242361e65114b8f215d89&w=360"
              className="relative bottom-10 md:bottom-20"
              radius="none"
            />
            <Image
              width={180}
              src="https://img.freepik.com/free-photo/arrangement-salad-copy-space-card_23-2148748868.jpg?t=st=1708772638~exp=1708776238~hmac=7f5d3a9172121c0d3aa8c55599890f2832cab9f0e8783bf363232a20f28dc2be&w=740"
              className="relative top-3 left-3"
              radius="none"
            />
          </div>
          <div className="flex flex-row mt-5 md:mt-0">
            <Image
              width={150}
              src="https://img.freepik.com/free-photo/fresh-broccoli-vegetable_144627-20156.jpg?t=st=1708610190~exp=1708613790~hmac=6ac06d9c3bbd3a7c5907684d74cfbda44d83b1b6222109eba2925e64257d3be4&w=740"
              className="relative left-10 bottom-10 md:left-20 md:bottom-20"
              radius="none"
            />
            <Image
              width={200}
              src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?t=st=1708610221~exp=1708613821~hmac=97c218768c5c44fbdb419c49e37c76e90494cb59c4edd4a1a0a7ebb595a981cf&w=360"
              className="relative left-12 bottom-20 md:left-24 md:bottom-40"
              radius="none"
            />
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
