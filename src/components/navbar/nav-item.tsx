import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type NavItemProps = {
  isActive: boolean;
  label: string | React.ReactNode;
  path: string
}

const NavItem: React.FC<NavItemProps> = ({isActive, label, path}) => {
  return (
    <NavbarItem>
      <Link href={path} className=" md:text-[14px] lg:text-[18px]">
        {label}
      </Link>
    </NavbarItem>
  );
};

export default NavItem;
