import { ImageResponse } from "next/og";

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
    : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;


export const size = {
    width: 1200,
    height: 630,
  }
export const contentType = 'image/jpeg'

export default function OGImage() {

  

    return new ImageResponse(<div style={{
        height: "630px",
        width: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "48px",
        backgroundColor: "black"
    }}>
        <img 
            style={{
                width: "100%",
                aspectRatio: "auto"
            }}
            src={`${apiEndpoint}/fallback_cover.jpg`} />
    </div>)
}