import React from "react";
import video from "../assets/new.mp4";


const BgVideo = () => {
  return (
    <div
      class="flex items-center  
        justify-center h-[25rem] relative overflow-hidden "
    >
      <video
        src={video}
        autoplay="{true}"
        loop
        muted
        className="absolute  w-auto  
            min-w-full min-h-full max-w-none"
      ></video>

      <div className="text-white absolute  px-[6rem] py-[2rem]">
        <h1 className="text-4xl font-bold">Sustainability Is Not an Option. It’s the Answer.</h1>
        <div className="py-[1rem] ">
          <p className="text-1xl">
            Our outlook is focused on providing exceptional seafood for generations to come, <br /> so we will never put
            species or environments at risk for short-term gain
          </p>
        </div>
      </div>
    </div>
  );
};

export default BgVideo;
