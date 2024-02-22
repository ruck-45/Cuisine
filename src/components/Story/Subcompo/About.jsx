import React from "react";

const About = () => {
  return (
    <div className="flex xl:flex-row flex-col items-start justify-start gap-[4rem] bg-black lg:h-[40rem] h-auto lg:p-[5rem] p-[2rem] lg:relative">
      <div className="flex flex-col items-start justify-start px-[4rem] ">
        <h1 className="text-4xl font-bold text-white">Our chefs’ inspiration</h1>
        <div className="">
          <p className="text-1xl font-bold text-white">
            Living by the water and tending their own vegetable and herb gardens, <br /> our chefs take inspiration from
            the sea and the land to create <br />
            mouth-watering dishes you can serve from your own kitchen. <br /> By taking on the complicated culinary
            techniques, <br /> we’ve simplified the cooking to save you the time and effort.
          </p>
        </div>
      </div>

      {/* image */}
      <div className="px-[2rem] lg:inline-block hidden">
        <img
          className="lg:absolute w-[18rem] right-[22rem] bottom-[25rem]"
          src="https://img.freepik.com/premium-photo/traditional-greek-grilled-seafood-restaurant-wooden-plate_711700-5473.jpg?w=740"
          alt=""
        />
        <img
          className="lg:absolute w-[15rem] right-[6rem] bottom-[30rem]"
          src="https://img.freepik.com/free-photo/thai-food-tom-yum-kung-river-prawn-spicy-soup_1150-35451.jpg?w=740&t=st=1708606127~exp=1708606727~hmac=73543fe3a825d3059e60818dd3a35a4bb1e0526c6988c3c1aea7b0243d6a0866"
          alt=""
        />
        <img
          className="lg:absolute w-[20rem] right-[23rem] bottom-[11rem]"
          src="https://img.freepik.com/free-photo/thai-food-tom-yum-kung-river-prawn-spicy-soup_1150-35451.jpg?w=740&t=st=1708606127~exp=1708606727~hmac=73543fe3a825d3059e60818dd3a35a4bb1e0526c6988c3c1aea7b0243d6a0866"
          alt=""
        />
        <img
          className="lg:absolute z-10 right-[5rem] w-[18rem] bottom-[6rem]"
          src="https://img.freepik.com/free-photo/seafood-plate-with-shrimps-mussels-lobsters-served-with-lemon_140725-8798.jpg?w=740&t=st=1708606089~exp=1708606689~hmac=66f40c54a4118d6f26e24436a3ead86d0f9b18f5a450c4fb0f2ea8b86ebe02ac"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
