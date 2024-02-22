import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black h-auto text-white px-[1rem] md:px-[5rem] py-[2rem]">
      <div className="flex flex-col items-start justify-center xl:px-[13rem] lg:px-[10rem] px-[1rem]">
        <div>
          <img
            className="lg:w-[50rem] lg:h-[25rem] w-auto h-auto"
            src="https://img.freepik.com/free-photo/very-large-beautiful-chunk-ice-sunrise-winter_335224-293.jpg?t=st=1708600997~exp=1708604597~hmac=a5a7df5b034a09677f0a3afd7a635d292b9f1393167737a732ed9c632bd217c2&w=740"
            alt=""
          />
        </div>
        <div className="py-[1.5rem]">
          <h1 className="text-4xl font-bold">It all begins with sustainability</h1>
        </div>
        <div className="py-[0.5rem]">
          <p className="font-semibold">
            Sea Cuisine will continue to push culinary boundaries so you can explore your own. As our chefs bring you
            bold and exciting seafood, we will always find inspiration in the beauty of the sea. Our recipes begin with
            sourcing sustainable seafood. By using responsible sourcing practices, we maintain strict criteria for our
            suppliers to make sure we’re doing our part in the protection and viability of seafood globally.
          </p>
        </div>
        <div className="py-[1rem]">
          <h3 className="font-bold text-1xl">LEARN MORE ABOUT OUR SUSTAINABILITY MISSION</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
