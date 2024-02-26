import React from "react";
import { Image } from "@nextui-org/react";
import img from "../assets/city.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Chef = () => {
  return (
    <div className="flex flex-col p-5 px-[4rem] lg:px-[6rem] bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
        <div className="md:mt-[5rem]">
          <h1 className="text-white text-3xl font-bold mb-5 md:mb-8">
            Our chefs’ inspiration <br />
            await!
          </h1>
          <p className="text-white text-md md:text-lg">
            Living by the water and tending their own vegetable and herb gardens, our chefs take inspiration from the
            sea and the land to create mouth-watering dishes you can serve from your own kitchen. By taking on the
            complicated culinary techniques, we’ve simplified the cooking to save you the time and effort.
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
              src="https://media.istockphoto.com/id/1449519051/photo/uzbek-prepared-boiled-manti-or-manty-dumplings-in-a-traditional-bowl-on-wooden-table.jpg?s=2048x2048&w=is&k=20&c=SkDDhD9oOa1xvsYkC6Gk6T-1pbESq8inRwXzv-kcBWs="
              className="relative left-10  bottom-10 md:left-20 md:bottom-20"
              radius="none"
            />
            <Image
              width={200}
              src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="relative bottom-2 left-3"
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
            Food experiences you <br /> want to share
          </h1>
          <p className="text-white text-md md:text-lg">
            We believe in creating great food experiences that should be shared. With recipes that are versatile enough
            to host a backyard barbecue or enjoy a romantic dinner for two, we ensure our seafood will always impress.
            With the main dish taken care of, you can get confident in the kitchen and dial up the creativity to make
            the perfect sides that complete your meal!
          </p>
          <Link to="../Products" className="flex items-center gap-2 md:gap-4 hover:gap-6 duration-100 text-white mt-8">
            <p className="font-bold text-lg md:text-xl">CHECK OUT</p>
            <FaArrowRightLong className="w-12 md:w-16 mt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
