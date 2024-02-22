import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const OurStory = () => {
  return (
    <div className="h-[60vh] bg-white justify-center items-center text-black grid grid-cols-2 p-[2rem]">
      <div></div>
      <div className="flex flex-col gap-2">
        <h1 className="text-start font-bold text-3xl">
          Experience the legacy of our culinary heritage in your own kitchen!
        </h1>
        <p className="mt-5">
          Rooted in the expertise of chefs, Sea Cuisine offers delectable, sustainably sourced seafood products
          originally crafted for culinary professionals. Now, you can savor these restaurant-caliber dishes at home,
          ready in under 30 minutes!
        </p>
        <Link
          to="../OurStory"
          className="mb-[2rem] flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-black mt-8"
        >
          <p className="font-bold text-xl">DISCOVER OUR STORY</p>
          <FaArrowRightLong className="w-[5rem] mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default OurStory;
