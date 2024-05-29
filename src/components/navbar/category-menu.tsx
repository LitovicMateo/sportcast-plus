import React from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import NavItem from "./nav-item";
import { Akshar } from "next/font/google";
import {navItems} from "../../lib/categories"
import HomeIcon from "@mui/icons-material/Home";


const akshar = Akshar({
  subsets: ["latin"],
  weight: ["300"]
})

export default function CategoryMenu() {

  const categories = [
    {
      label: <HomeIcon className="text-[24px] " />,
      path: "/"
    },
    ...navItems
  ]
  return (
    <Navbar
      className={`${akshar.className} bg-[#1d1d1d] justify-center items-center text-white w-full h-[48px]  hidden md:flex `}
      position="sticky"
    >
      <NavbarContent className="w-full max-w-full lg:max-w-[1200px] text-[32px] uppercase gap-6 lg:gap-12" justify="center" >
        {categories.map((item) => (
          <NavItem isActive={false} label={item.label} path={"/"+item.path} key={item.path} />
        ))}
      </NavbarContent>
    </Navbar>
  );
}
