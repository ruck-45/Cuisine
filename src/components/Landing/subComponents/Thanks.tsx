import { FaThumbsUp } from "react-icons/fa6";
import { HiOutlineHandThumbUp } from "react-icons/hi2";

const Thanks = () => {
  return (
    <div className="bg-black/95 flex flex-col gap-y-4 items-center justify-center p-[2rem]">
      <div className="bg-blue-600 rounded-full p-[2rem]">
        <HiOutlineHandThumbUp className="text-white" size={100} />
      </div>
      <p className="text-white font-bold text-2xl">Thanks For Visiting Us</p>
    </div>
  );
};

export default Thanks;
