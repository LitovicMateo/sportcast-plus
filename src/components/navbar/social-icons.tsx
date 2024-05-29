"use client";

import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialIcons = () => {
  return (
    <>
      <div className="h-[32px] flex justify-center items-center aspect-square rounded-full bg-[#1d1d1d] text-accent">
        <a href="http://www.youtube.com/@sportcastplus" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon fontSize="small" />
        </a>
      </div>
      <div className="h-[32px] flex justify-center items-center aspect-square rounded-full bg-[#1d1d1d] text-accent">
        <a href="https://www.facebook.com/Sportcastplus/" target="_blank" rel="noopener noreferrer">
          <FacebookRoundedIcon fontSize="small" />
        </a>
      </div>
      <div className="h-[32px] flex justify-center items-center aspect-square rounded-full bg-[#1d1d1d] text-accent">
        <a href="https://www.instagram.com/sportcastplus/?hl=en" target="_blank" rel="noopener noreferrer">
          <InstagramIcon fontSize="small" />
        </a>
      </div>
    </>
  );
};

export default SocialIcons;

