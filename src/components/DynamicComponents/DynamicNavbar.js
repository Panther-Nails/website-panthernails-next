import React, { useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default ({
  data = {
    componentProperties: {
      companyLogo: "https://panthernails.com/img/logo.png",
    },
  },
}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div tw=" flex justify-between items-center h-24  mx-auto px-4 bg-white relative z-50 lg:sticky top-0 lg:shadow-lg">
      <img
        src={data.componentProperties.companyLogo}
        tw="w-[48%] lg:w-[23%]"
        alt="image not load"
      ></img>

      <ul tw="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            tw="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} tw="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {nav && (
        <ul tw="fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500 ">
          {/* <h1 tw="w-full text-3xl font-bold text-white m-4">REACT.</h1> */}
          <img
            src={data.componentProperties.companyLogo}
            tw="w-[48%] lg:w-[23%] p-4"
            alt="image not load"
          ></img>
          {navItems.map((item) => (
            <li
              key={item.id}
              tw="p-4 m-2 border-b text-white rounded-xl hover:bg-gray-500 duration-300 hover:text-black cursor-pointer bg-blue-500 border-gray-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
