import React from 'react'
import SocialIcons from '../navbar/social-icons'

const Footer = () => {
  return (
    <div className='w-full h-[80px] bg-[#1d1d1d] justify-self-end text-accent flex justify-center gap-8 items-center'>
        <SocialIcons />
    </div>
  )
}

export default Footer;