import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import NavItem from "./nav-item";
import SocialIcons from "./social-icons";

const navItems = [
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

export default function CategoryMenu() {
  return (
    <Navbar
      className="bg-brand justify-center items-center text-accent w-full border-b-2 border-solid border-brand border-opacity-10 hidden md:flex "
      position="sticky"
    >
      <NavbarContent className="w-full max-w-[1000px] uppercase font-semibold gap-12" justify="center">
        {navItems.map((item) => (
          <NavItem isActive={false} label={item.label} path={item.path} />
        ))}
      </NavbarContent>
    </Navbar>
  );
}
