import { ImageResponse } from "next/og";
import Image from "next/image";

export const size = {
    width: 1200,
    height: 630,
  }
export const contentType = 'image/jpeg'

export default async function OGImage() {


    return new ImageResponse(<div style={{
        height: "630px",
        width: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "48px"
    }}>Hello world</div>)
}