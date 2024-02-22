import React from "react";

const Intro = ({title,des}) => {
  return (
    <div className="felx flex-col justify-center items-center bg-black h-auto md:p-[5rem] p-[2rem]">
      <div className="lg:px-[10rem]">
        <h1 className="text-white text-4xl font-bold text-start">{title}</h1>
      </div>
      <div className="py-[2rem] lg:px-[10rem] ">
        <p className="text-1xl text-white font-semibold text-start">
          {des}
        </p>
      </div>
    </div>
  );
};

export default Intro;
