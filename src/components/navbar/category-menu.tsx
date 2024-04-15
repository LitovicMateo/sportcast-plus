import React from "react";
import { Navbar, NavbarContent } from "@nextui-org/react";
import NavItem from "./nav-item";
import HomeIcon from "@mui/icons-material/Home";
import { Kanit } from "next/font/google";

const navItems = [
  {
    label: <HomeIcon />,
    path: "/",
  },
  {
    label: "Nogomet",
    path: "/nogomet",
  },
  {
    label: "Košarka",
    path: "/kosarka",
  },
  {
    label: "Rukomet",
    path: "/rukomet",
  },
  {
    label: "Odbojka",
    path: "/odbojka",
  },
  {
    label: "MMA",
    path: "/mma",
  },
  {
    label: "Tenis",
    path: "/tenis",
  },
  {
    label: "Petak kod Pajde",
    path: "/petak-kod-pajde",
  },
];

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["200"]
})

export default function CategoryMenu() {
  return (
    <Navbar
      className={`${kanit.className} bg-brand justify-center items-center text-accent w-full h-[48px] border-b-2 border-solid border-brand border-opacity-10 hidden md:flex `}
      position="sticky"
    >
      <NavbarContent className="w-full max-w-[1000px] uppercase font-semibold gap-8 lg:gap-12" justify="center">
        {navItems.map((item) => (
          <NavItem isActive={false} label={item.label} path={item.path} />
        ))}
      </NavbarContent>
    </Navbar>
  );
}
