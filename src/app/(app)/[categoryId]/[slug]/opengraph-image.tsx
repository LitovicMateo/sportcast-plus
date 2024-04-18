import { ImageResponse } from "next/og";
import Image from "next/image";

export const size = {
    width: 1200,
    height: 630,
  }
export const contentType = 'image/jpeg'

export default async function OGImage() {


    return new ImageResponse(<Image src={"https://lime-panther-317414.hostingersite.com/wp-content/uploads/2024/04/ll.jpg"} height={size.height} width={size.width} alt="test img" />)
}