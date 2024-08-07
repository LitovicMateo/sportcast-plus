import Link from 'next/link';
import React from 'react'

import styles from './NavItem.module.css'

type NavItemProps = {
    item: {
        label: string;
        path: string
    }
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  return (
    <div className={styles.item}>
        <Link href={`/${item.path}`}>
            <span className={styles.label}>{item.label}</span>
        </Link>
    </div>
  )
}

export default NavItem