import React from "react";

const Goal = () => {
  return (
    <div className="flex h-auto lg:flex-row flex-col items-center justify-evenly lg:px-[5rem] lg:py-[6rem] p-[2rem] gap-10 bg-black">
      {/* photo */}
      <div className="px-[2rem] lg:inline-block hidden">
        <div>
          <img
            className="w-[260rem] "
            src="https://images.unsplash.com/photo-1528582500408-f8eeefb9bc95?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col justify-center items-start px-[2rem]">
        <div className="py-[2rem]">
          <h1 className=" font-bold text-4xl text-white">Our Goal</h1>
        </div>
        <div className="py-[1rem] ">
          <p className="text-white  font-normal ">
            We source seafood from around the world. No matter where we source, our requirements are the same: suppliers
            must strive to catch or farm seafood responsibly, protect against overfishing and limit impacts on the
            natural environment. They are also expected to treat their employees well - in accordance with human rights
            and human dignity – and uphold high worker safety and social standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
