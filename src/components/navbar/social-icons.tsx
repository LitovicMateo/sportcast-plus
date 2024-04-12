"use client";

import Link from "next/link";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialIcons = () => {
  return (
    <>
      <div className="h-[24px] aspect-square rounded-full bg-brand text-accent">
        <a href="http://www.youtube.com/@sportcastplus" target="_blank" rel="noopener noreferrer">
          <YouTubeIcon fontSize="small" />
        </a>
      </div>
      <div className="h-[24px] aspect-square rounded-full bg-brand text-accent">
        <a href="http://www.youtube.com/@sportcastplus" target="_blank" rel="noopener noreferrer">
          <FacebookRoundedIcon fontSize="small" />
        </a>
      </div>
      <div className="h-[24px] aspect-square rounded-full bg-brand text-accent">
        <a href="http://www.youtube.com/@sportcastplus" target="_blank" rel="noopener noreferrer">
          <XIcon fontSize="small" />
        </a>
      </div>
      <div className="h-[24px] aspect-square rounded-full bg-brand text-accent">
        <a href="http://www.youtube.com/@sportcastplus" target="_blank" rel="noopener noreferrer">
          <InstagramIcon fontSize="small" />
        </a>
      </div>
    </>
  );
};

export default SocialIcons;

// youtube
// facebook
// twitter
// instagram?
