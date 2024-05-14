import React from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import NavItem from "./nav-item";
import { Kanit } from "next/font/google";
import {navItems} from "../../lib/categories"
import HomeIcon from "@mui/icons-material/Home";


const kanit = Kanit({
  subsets: ["latin"],
  weight: ["200"]
})

export default function CategoryMenu() {

  const categories = [
    {
      label: <HomeIcon />,
      path: "/"
    },
    ...navItems
  ]
  return (
    <Navbar
      className={`${kanit.className} bg-brand justify-center items-center text-accent w-full h-[48px] border-b-2 border-solid border-brand border-opacity-10 hidden md:flex `}
      position="sticky"
    >
      <NavbarContent className="w-full max-w-[1000px] uppercase font-semibold gap-8 lg:gap-8" justify="center">
        {categories.map((item) => (
          <NavItem isActive={false} label={item.label} path={"/"+item.path} key={item.path} />
        ))}
      </NavbarContent>
    </Navbar>
  );
}
