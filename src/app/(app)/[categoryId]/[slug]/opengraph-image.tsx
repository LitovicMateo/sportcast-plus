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
    }}>
        <img 
            style={{
                height: "100%",
                width: "100%"
            }}
            src="https://lime-panther-317414.hostingersite.com/wp-content/uploads/2024/04/ll.jpg" />
    </div>)
}