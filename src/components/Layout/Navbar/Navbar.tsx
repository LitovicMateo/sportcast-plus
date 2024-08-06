"use client";

import React, { useState } from "react";

import { navItems } from "../../../lib/categories";
import NavItem from "./Desktop/NavItem";
import HomeIcon from "@mui/icons-material/Home";

import styles from "./Navbar.module.css";
import Link from "next/link";
import Toggle from "./Mobile/Toggle";
import MobileMenu from "./Mobile/MobileMenu";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.container}>
      <Toggle clickHandler={handleMenu} />
      <nav className={styles.navbar}>
        <Link href={"/"}>
          <HomeIcon className={styles.icon} />
        </Link>
        {navItems.map((el) => (
          <NavItem item={el} key={el.label} />
        ))}
      </nav>
      <AnimatePresence>{menuIsOpen && <MobileMenu />}</AnimatePresence>
    </header>
  );
};

export default Navbar;
