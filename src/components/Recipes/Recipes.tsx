// Dependencies
import { useDispatch } from "react-redux";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import fishRecipes from "./assets/data.json";

const Recipes = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Recipes"));
  scrollTop();

  return (
    <div>
      <div
        className="h-[30rem] bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <div className="py-[5rem] px-[2rem] lg:px-[5rem] xl:px-[10rem] bg-black text-white flex flex-col gap-[4rem]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[1rem] md:gap-0">
          <p className="font-bold text-[3rem]">Recipes</p>
          <div className="flex justify-center items-center gap-[1rem]">
            <p>Filter By</p>
            <Dropdown radius="none">
              <DropdownTrigger>
                <Button
                  radius="none"
                  className="font-semibold"
                  endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
                >
                  Recipe Type
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="all">All Recipes</DropdownItem>
                <DropdownItem key="burger">Burgers & Sliders</DropdownItem>
                <DropdownItem key="entree">Entree</DropdownItem>
                <DropdownItem key="salads">Salads & Bowels</DropdownItem>
                <DropdownItem key="sandwitches">Sandwitches & Wraps</DropdownItem>
                <DropdownItem key="sheet">Sheet Pans</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown radius="none">
              <DropdownTrigger>
                <Button
                  radius="none"
                  className="font-semibold"
                  endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
                >
                  Fish Type
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="all">All Fish</DropdownItem>
                <DropdownItem key="crab">Crab</DropdownItem>
                <DropdownItem key="salmon">Salmon</DropdownItem>
                <DropdownItem key="cod">Cod</DropdownItem>
                <DropdownItem key="tilapia">Tilapia</DropdownItem>
                <DropdownItem key="shrimp">Shrimp</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          {fishRecipes.map((data, index) => (
            <div key={index} className="border-3 hover:translate-y-[-0.5rem] transition cursor-pointer">
              <div
                className="bg-no-repeat bg-center bg-cover h-[18rem]"
                style={{
                  backgroundImage: `url("${data.image}")`,
                }}
              ></div>
              <p className="p-[3rem] text-center text-[1.5rem] font-bold border-t-1">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
