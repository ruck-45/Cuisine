// Dependencies
import { Divider, Image, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

// Local Files
import "./Footer.css";
import logo from "../globalAssets/logo.svg";

const footerLinks = [
  {
    type: "Brand",
    data: [
      { key: "Our Story", value: "Our Story", link: "", state: {} },
      { key: "Sustainability", value: "Sustainability", link: "", state: {} },
      { key: "Where to buy", value: "Where to buy", link: "", state: {} },
      { key: "Contact Us", value: "Contact Us", link: "", state: {} },
      { key: "Privacy Policy", value: "Privacy Policy", link: "", state: {} },
    ],
  },
  {
    type: "Products",
    data: [
      { key: "All Products", value: "All Products", link: "", state: { id: 0 } },
      { key: "Salmon", value: "Salmon", link: "", state: { id: 1 } },
      { key: "Tilapia", value: "Tilapia", link: "", state: { id: 2 } },
      { key: "Cod", value: "Web Analytics", link: "", state: { id: 3 } },
      { key: "Crab", value: "Crab", link: "", state: { id: 4 } },
    ],
  },
  {
    type: "Recipes",
    data: [
      { key: "All Recipes", value: "All Recipes", link: "", state: { id: 0 } },
      { key: "Burgers & Sliders", value: "Burgers & Sliders", link: "", state: { id: 1 } },
      { key: "Entrée", value: "Entrée", link: "", state: { id: 2 } },
      { key: "Salads & Bowls", value: "Salads & Bowls", link: "", state: { id: 3 } },
      { key: "Sandwiches & Wraps", value: "Sandwiches & Wraps", link: "", state: { id: 4 } },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[6rem] gap-[2rem] text-white footer">
      <div className="flex upperFooter justify-evenly sm:w-[70%]">
        <div className="max-w-[20rem] flex flex-col gap-[2rem] companySection md:mr-[8rem]">
          <Image width={150} src={logo} alt="logo" className="bg-white p-[1rem]" />

          <Link to="/Privacy" className="text-blue-400">
            Privacy & Policy
          </Link>
          <div className="flex text-[1.8rem] gap-[1rem] ">
            <a>
              <SiFacebook className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a>
              <FaSquareXTwitter className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a>
              <TbBrandYoutubeFilled className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a>
              <AiFillInstagram className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a>
              <FaPinterest className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
          </div>
        </div>

        <div className="flex justify-between w-full footerLinks gap-[2rem] mt-[3rem] ">
          {footerLinks.map((ele, index) => (
            <div key={index} className="flex flex-col gap-[1rem]">
              <p className="font-['poppins'] text-[#F5A524] font-bold text-[1.1rem]">{ele.type}</p>
              <Listbox items={ele.data} aria-label="navigation" className="dark" variant="light">
                {(item) => (
                  <ListboxItem key={item.key} className="px-[0]" textValue={item.key}>
                    <Link to={`../${item.link}`} state={item.state}>
                      {item.value}
                    </Link>
                  </ListboxItem>
                )}
              </Listbox>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%]">
        <Divider className="dark" />
        <Divider className="dark" />
        <Divider className="dark" />
      </div>

      <p>© 2024 CUISINE • All Rights Reserved</p>
    </div>
  );
};

export default Footer;
