import React from "react";

const Mission = () => {
  return (
    <div className="flex h-auto lg:flex-row flex-col items-center justify-evenly lg:px-[5rem] lg:py-[7rem] p-[2rem] gap-10 bg-black">
      {/* content */}
      <div className="flex flex-col justify-center xl:items-end items-start px-[2rem]">
        <div className="py-[2rem]">
          <h1 className=" font-bold text-4xl text-white">Our Mission</h1>
        </div>
        <div className="py-[1rem] ">
          <p className="text-white  font-normal xl:text-end ">
            The vast majority of High Liner’s seafood is caught in the wild. Sustainability for wild-caught seafood
            means it must be legally caught, secure from poaching and protected from overfishing. Further, the fishing
            practices need to minimize damage to the habitat and non-target species
          </p>
        </div>
      </div>

      {/* photo */}
      <div className="px-[3rem] lg:inline-block hidden">
        <div>
          <img
            className="w-[190rem] "
            src="https://images.unsplash.com/photo-1625183656263-171183307b15?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
