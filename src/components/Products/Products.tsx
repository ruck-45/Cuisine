// Dependencies
import { useDispatch } from "react-redux";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import product from "./assets/data.json";

const Products = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Products"));
  scrollTop();

  return (
    <div>
      <div
        className="h-[30rem] bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534483509719-3feaee7c30da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <div className="py-[5rem] px-[2rem] lg:px-[5rem] xl:px-[10rem] bg-black text-white flex flex-col gap-[4rem]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[1rem] md:gap-0">
          <p className="font-bold text-[3rem]">Products</p>
          <div className="flex justify-center items-center gap-[1rem]">
            <p>Filter By</p>
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
            <Dropdown radius="none">
              <DropdownTrigger>
                <Button
                  radius="none"
                  className="font-semibold"
                  endContent={<IoMdArrowDropdown className="text-xl mt-[0.2rem]" />}
                >
                  Product Type
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="all">All Products</DropdownItem>
                <DropdownItem key="crusted">Crusted</DropdownItem>
                <DropdownItem key="glazed">Glazed</DropdownItem>
                <DropdownItem key="hand">Hand Rubbed</DropdownItem>
                <DropdownItem key="seasoned">Seasoned</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          {product.map((data, index) => (
            <div key={index} className="border-3 hover:translate-y-[-0.5rem] transition cursor-pointer">
              <div
                className="bg-no-repeat bg-center bg-cover h-[18rem]"
                style={{
                  backgroundImage: `url("${data.image}")`,
                }}
              ></div>
              <div className="p-[2rem] flex flex-col gap-[1rem] items-center border-t-1">
                <p className="text-[1.5rem] font-bold text-center">{data.name}</p>
                <p className="text-red-500">${data.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
