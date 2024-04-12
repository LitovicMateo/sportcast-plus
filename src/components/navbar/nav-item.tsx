import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type NavItemProps = {
  isActive: boolean;
  label: string;
  path: string
}

const NavItem: React.FC<NavItemProps> = ({isActive, label, path}) => {
  return (
    <NavbarItem>
      <Link href={path}>
        {label}
      </Link>
    </NavbarItem>
  );
};

export default NavItem;
