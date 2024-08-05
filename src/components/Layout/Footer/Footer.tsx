import React from 'react'
import SocialIcons from '@/components/navbar/social-icons'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <SocialIcons />
    </div>
  )
}

export default Footer;