import { ImageResponse } from "next/og";
import Image from "next/image";

export const size = {
    width: 1200,
    height: 630,
  }
export const contentType = 'image/jpeg'

export default async function OGImage() {


    return new ImageResponse(<div className="h-[630px] w-[1200px] flex justify-center items-center"><img src={"https://lime-panther-317414.hostingersite.com/wp-content/uploads/2024/04/ll.jpg"} alt="test img" /></div>)
}