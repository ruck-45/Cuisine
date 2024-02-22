import React from "react";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-[4rem] text-white bg-black h-auto p-[4rem]  lg:p-[6rem]">
      <div className="flex flex-col justify-start items-start">
        <div className="py-[0.5rem]">
          <img
            className="w-[32rem]"
            src="https://img.freepik.com/free-photo/top-view-shrimp-ready-be-cooked_23-2150239004.jpg?w=740&t=st=1708583386~exp=1708583986~hmac=fb0064b8ac1dc2da357c88600a44cd316f3920ef2b3dd8932302aa9d36a1a312"
            alt=""
          />
        </div>
        <div className="py-[0.5rem]">
          <h1 className="text-start font-semibold text-3xl">Wild - Caught Seafood</h1>
        </div>
        <div className="py-[0.5rem]">
          <p>
            Sustainable wild-caught seafood is legally caught, secure from poaching and protected from overfishing. We
            require our suppliers to demonstrate that they minimize damage to fish habitats and use effective strategies
            to avoid bycatch. We source wild-caught products that are:
          </p>
        </div>
        <div className="p-[1rem]">
          <ul className="list-disc text-white">
            <li>MSC certified or from suppliers undergoing full MSC assessment;</li>
            <li>Recognized by the GSSI benchmark;</li>
            <li>
              From credible, publicly documented Fishery Improvement Projects that are demonstrating true progress;
            </li>
            <li>OceanWise™-recommended or rated Best Choice or Good Alternative by Seafood Watch™.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start">
        <div className="py-[0.5rem]">
          <img
            className="w-[32rem]"
            src="https://img.freepik.com/free-photo/prawns_1157-530.jpg?t=st=1708581149~exp=1708584749~hmac=b136e289a1ddf876275fa7705f8c3243a80396d8c54ff1563387b2f1441b89a6&w=740"
            alt=""
          />
        </div>
        <div className="py-[0.5rem]">
          <h1 className="text-start text-3xl font-semibold">Farm Raised Seafood</h1>
        </div>
        <div className="py-[0.5rem]">
          <p>
            Experts increasingly agree that responsible, sustainable aquaculture is essential to meet the world’s
            growing demand for seafood. In addition to disclosing the sources of our farmed seafood through the
            Sustainable Fisheries Partnership’s Ocean Disclosure Project, we source farmed products that are:
          </p>
        </div>
        <div className="p-[1rem]">
          <ul className="list-disc text-white">
            <li>Recognized by the GSSI benchmark;</li>
            <li>Aquaculture Stewardship Council (ASC)-certified or from suppliers undergoing full ASC assessment;</li>
            <li>Global Aquaculture Alliance Best Aquaculture Practices (1-4 stars)-certified;</li>
            <li>From credible, publicly documented Aquaculture Improvement Projects;</li>
            <li>OceanWiseTM-recommended or rated Best Choice or Good Alternative by Seafood WatchTM.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
