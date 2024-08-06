import React from "react";

import styles from "./MobileMenu.module.css";
import { motion } from "framer-motion";
import { navItems } from "../../../../lib/categories";

const MobileMenu = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "100vh" }}
      exit={{ height: 0 }}
      className={styles.container}
    >
      <motion.div className={styles.innerContainer}>
        {navItems.map((el, index) => (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 + (0.02 * index) } }}
            exit={{ opacity: 0 }}
          >
            {el.label}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
