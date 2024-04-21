'use client'

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Image from "next/image";
import SocialIcons from "./social-icons";
import { navItems } from "../../lib/categories"


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black text-accent w-full sticky md:static">
       <NavbarContent className="justify-start md:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}

        />
      </NavbarContent>
      <NavbarBrand className="justify-center lg:justify-start">
        <Link href="/">
          <Image className="aspect-square" src={"/sportcast_logo.jpg"} height={50} width={50} alt="sportcast" quality={100} />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex" justify="end">
        <SocialIcons />
      </NavbarContent>
      <NavbarContent className="md:hidden"></NavbarContent>
      <NavbarMenu className="bg-brand ">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link

              className="w-full text-accent uppercase font-[600]"
              href={`/${item.path}`}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
