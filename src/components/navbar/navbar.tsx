import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
import NavItem from "./nav-item";
import SocialIcons from "./social-icons";

const navItems = [
  {
    label: "Podkast",
    path: "/podcast",
  },
  {
    label: "Intervju",
    path: "/intervju",
  },
  {
    label: "Kolumne",
    path: "/kolumne",
  },
];

export default function NavBar() {
  return (
    <Navbar className="bg-brand text-accent w-full" position="static">
      <NavbarBrand className="justify-center lg:justify-start">
        <Link href="/">
          <Image className="aspect-square" src={"/sportcast_logo.jpg"} height={50} width={50} alt="sportcast" quality={100} />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex" justify="end">
        <SocialIcons />
      </NavbarContent>
    </Navbar>
  );
}
