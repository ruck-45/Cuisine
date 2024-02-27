import { Button, Card, CardBody, Divider, Input } from "@nextui-org/react";
import { LuDessert } from "react-icons/lu";

const Subscribe = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 px-[2rem] md:px-[4rem] py-[1rem] bg-black">
      <div className="flex flex-col gap-y-3 text-start text-white  md:px-[7rem] md:py-[2rem]">
        <h1 className="text-6xl md:text-7xl font-bold ">Stay Updated with Deliciousness</h1>
        <p className="text-2xl text-gray-300">Subscribe for weekly recipe inspiration.</p>
        <div className="flex flex-row gap-x-2 ">
          <Input
            type="email"
            placeholder="Your Email"
            variant="bordered"
            className="text-black bg-white"
            radius="none"
          />
          <Button className="bg-[#F5A524] text-white w-[50%] h-[3.4rem]" variant="shadow" radius="sm" size="lg">
            Sign Up
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 md:px-[4rem] py-[1rem] items-center justify-center">
        <Card className="px-[2rem] md:px-[6rem] py-[2rem]">
          <CardBody className="flex flex-col gap-y-2 ">
            <div className="flex flex-col gap-y-2">
              <LuDessert className="text-[#F5A524] " size={35} />
              <h1 className="font-bold text-black text-[1.2rem]">Vegetarion Options</h1>
              <p>Explore a variety of plant-based dishes.</p>
            </div>
            <Divider />
            <div className="flex flex-col gap-y-2">
              <LuDessert className="text-[#F5A524] " size={35} />
              <h1 className="font-bold text-black text-[1.2rem]">Vegetarion Options</h1>
              <p>Explore a variety of plant-based dishes.</p>
            </div>
            <Divider />
            <div className="flex flex-col gap-y-2">
              <LuDessert className="text-[#F5A524] " size={35} />
              <h1 className="font-bold text-black text-[1.2rem]">Vegetarion Options</h1>
              <p>Explore a variety of plant-based dishes.</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Subscribe;
