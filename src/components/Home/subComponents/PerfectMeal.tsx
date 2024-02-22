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
              src="https://img.freepik.com/free-photo/top-view-baked-potatoes-with-minced-meat-greens-inside-grey-plate-dark-blue-desk_140725-49956.jpg?t=st=1708609961~exp=1708613561~hmac=994ede0b0c2e8478f3f01a758e9814c7288b64f57f16f0fa1f7c3ecb4f78917a&w=996"
              className="relative top-5 left-3"
              radius="none"
            />
          </div>
          <div className="flex flex-row mt-5 md:mt-0">
            <Image
              width={150}
              src="https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?t=st=1708610012~exp=1708613612~hmac=c62508074940a2ba23997db44518c40faf34f59f1851e1e00cce7bc0f3bfceac&w=996"
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
              src="https://img.freepik.com/free-photo/top-view-male-cook-cutting-celery-dark-table-salad-diet-meal-color-photo-food-health_179666-17880.jpg?t=st=1708610120~exp=1708613720~hmac=04e75313354305c00b32cc6875b144065a2406ad7c42e948d8bd1419bd13985c&w=360"
              className="relative bottom-10 md:bottom-20"
              radius="none"
            />
            <Image
              width={180}
              src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?t=st=1708610166~exp=1708613766~hmac=f9d9b5993a5d60cc0601c5eca3af445583732f6c1de2447ff7fe53d49a9d7fd4&w=996"
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
