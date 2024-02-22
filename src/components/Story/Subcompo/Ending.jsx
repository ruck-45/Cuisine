import React from "react";
import './Ending.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Ending = () => {

    const navigate = useNavigate()
  return (
    <div>
      <div className=" bg h-[25rem] flex flex-col items-center justify-center text-white p-[4rem]">
      <div className="py-[1rem]">
        <h1 className="text-4xl text-center font-bold">Find inspiration for your next meal</h1>
      </div>
      <div className="py-[1rem] flex items-center justify-center gap-3">
        <h2 className="text-[1.3rem] text-center font-bold">EXPLORE OUR RECIPES </h2>
        <button>
          <FaArrowRightLong className="text-[1.3rem] hover:translate-x-3 hover:scale-125" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Ending;
