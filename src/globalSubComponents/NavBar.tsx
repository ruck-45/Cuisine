// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Local Files
import "./NavBar.css";
import icon from "../globalAssets/icon.svg";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";
import { updateToLoginStatus } from "../store/toLoginSlice";
import { getCookie } from "../utils/cookies";
const menuItems = ["Home", "Recipes", "Products", "OUR STORY", "SUSTANIBILTY"];

const NavBar = () => {
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();
  return (
    <Navbar
      isMenuOpen={navOpenStatus}
      onMenuOpenChange={() => {
        dispatch(updateNavStatus(!navOpenStatus));
      }}
      className="h-[7rem] nav md:z-[200] bg-black border-white"
      maxWidth="xl"
      isBordered
      position="sticky"
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-white" />
        <div className="bg-white hidden lg:block rounded-xl">
          <Link to="/">
            <Image width={80} src={icon} alt="logo" radius="none" className="p-3" />
          </Link>
        </div>
      </NavbarContent>
      <NavbarContent className="lg:hidden logo mr-[30%]" justify="end">
        <Link to="../Home">
          <div className="bg-white flex max-h-[5rem] rounded-xl ribbon ">
            <Image width={70} src={icon} alt="logo" radius="none" className="p-3" />
          </div>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex mt-[2rem]" justify="center">
        <NavbarItem>
          <Link
            to="../Home"
            className={curTab === "Home" ? "active navActive flex flex-col px-[0.5rem]" : "notActive px-[0.5rem]"}
          >
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../Recipes"
            className={curTab === "Recipes" ? "active navActive flex flex-col px-[0.5rem]" : "notActive px-[0.5rem]"}
          >
            RECIPES
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../Products"
            className={curTab === "Products" ? "active navActive flex flex-col px-[0.5rem]" : "notActive px-[0.5rem]"}
          >
            PRODUCTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../OurStory"
            className={curTab === "OurStory" ? "active navActive flex flex-col px-[0.5rem]" : "notActive px-[0.5rem]"}
          >
            OUR STORY
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../Sustain"
            className={curTab === "Sustain" ? "active navActive flex flex-col px-[0.5rem]" : "notActive px-[0.5rem]"}
          >
            SUSTAINABILITY
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="mt-[1rem] bg-[rgba(0,0,0,0.4)] z-[200]">
        {menuItems.map((item, index) => {
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={curTab === item ? "active" : "notActive"}
                to={index === 3 ? "../OurStory" : index === 4 ? "../Sustain" : `../${item}`}
                onClick={() => {
                  dispatch(updateNavStatus(!navOpenStatus));
                  dispatch(updateToLoginStatus(item === "Log In" ? true : false));
                }}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
