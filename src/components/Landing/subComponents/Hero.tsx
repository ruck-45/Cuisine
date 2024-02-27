import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/pic.jpg"

const Hero = () => {
  return (
    <div className="flex lg:flex-row lg:items-start flex-col items-center justify-start bg-white h-auto w-auto">
      <div className="flex flex-col justify-between items-center bg-white text-black xl:p-[8em] p-[3rem]">
        <div className="p-[2rem]">
          <h1 className="text-6xl font-bold text-center">
            Welcome to a<br /> World of <br />
            Flavours
          </h1>
        </div>
        <div className="p-[2rem]">
          <p className="text-2xl font-semibold text-gray-600 text-center">
            Discover new receipes,explore cuisines and more
          </p>
        </div>
        <div>
          <Link to="/Home">
            <button className="py-[1rem] text-white text-1xl px-[2rem] rounded-xl bg-[#FF0201]">Start Exploring</button>
          </Link>
        </div>
      </div>
      <div className="lg:inline-block hidden">
        <img
          className="w-[44rem]"
        //   src="https://img.freepik.com/free-photo/seafood-plate-with-shrimps-mussels-lobsters-served-with-lemon_140725-8798.jpg?w=740&t=st=1709027759~exp=1709028359~hmac=d43f8c36b5581c09eb6ed11cb2224db4fc4478485c0c6494d189a6861b8b959f"
        src={pic}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
