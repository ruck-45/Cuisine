import { FaPhone } from "react-icons/fa6";
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import { useDispatch } from "react-redux";
import { Button, Image } from "@nextui-org/react";
import RobinNav from "./subComponents/RobinNav";

const Robinhood = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Robinhood"));
  scrollTop();
  return (
    <>
      <RobinNav />
      <div className="flex flex-col items-center text-center justify-center p-[1rem] md:p-[5rem] bg-white gap-y-[1rem] md:gap-y-[2rem]">
        <Image src="https://digitalelo.online/wp-content/uploads/2024/02/Robinhood-logo-300x169.png" />
        <h1 className="font-bold text-4xl md:text-5xl">Hello!</h1>
        <p className="font-bold text-3xl">How Can We Help ?</p>
        <p className="font-bold text-3xl mt-[3rem] md:mt-0">Contact Us Today +1(818)666-9841</p>
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          <Image
            src="https://digitalelo.online/wp-content/uploads/2024/02/robinhood-1024x583.png"
            width={600}
            radius="none"
          />
          <Image
            src="https://digitalelo.online/wp-content/uploads/2024/02/us-product-invest-mobile-680x383-1.png"
            width={600}
            radius="none"
          />
        </div>
        <a className="flex gap-[1rem]" href="tel:+1 (855) 574-6610">
          <Button
            startContent={<FaPhone />}
            variant="solid"
            color="warning"
            className="text-white hover:scale-110 bg-black"
            radius="sm"
            size="lg"
          >
            Contact Us Today +1 (855) 574-6610
          </Button>
        </a>
      </div>
    </>
  );
};

export default Robinhood;
