import { ImageResponse } from "next/og";

// Define API endpoint based on environment
const apiEndpoint = process.env.NODE_ENV === "production"
  ? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
  : process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

// Define the size and content type for the image response
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/jpeg';

export default function OGImage() {
  const imageUrl = `${apiEndpoint}/fallback_cover.jpg`;

  return new ImageResponse(
    <div style={styles.container}>
      <img 
        style={styles.image}
        src={imageUrl} 
        alt="Fallback Cover"
      />
    </div>,
    {
      width: size.width,
      height: size.height,
    }
  );
}

// Define the styles for the container and image
const styles = {
  container: {
    height: '630px',
    width: '1200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '48px',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    aspectRatio: 'auto',
  },
};
