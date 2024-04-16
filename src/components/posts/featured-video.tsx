import React from "react";

const FeaturedVideo = () => {
  return (
      <iframe
        className="mx-auto w-full max-w-[500px]"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?si=j1U_Q2jY5uNupDIl&amp;list=PL2tSx9CeWRlz8_V-x4ymd5jn9Ndd7Ne4U"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
  );
};

export default FeaturedVideo;
