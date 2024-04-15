import { Kanit } from "next/font/google";
import Link from "next/link";
import React from "react";
import {Chip} from "@nextui-org/react";

type TagProps = {
  tag: string;
};

const kanit = Kanit({
    subsets: ["latin"],
    weight: ["500"]
  })
  

const Tag: React.FC<TagProps> = ({ tag }) => {
  return <Chip><Link href={"/"} className={`px-2 py-1 font-bold text-sm ${kanit.className}`}>{tag.toUpperCase()}</Link></Chip>;
};

export default Tag;
