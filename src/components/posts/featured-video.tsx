import React from "react";

const FeaturedVideo = () => {
  return (
    <div className="w-full h-fit pb-6 mb-4 bg-brand">
      <h2 className="text-accent uppercase w-full text-center font-bold text-2xl px-4">Latest video</h2>
      <iframe
        className="mx-auto"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?si=j1U_Q2jY5uNupDIl&amp;list=PL2tSx9CeWRlz8_V-x4ymd5jn9Ndd7Ne4U"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>{" "}
    </div>
  );
};

export default FeaturedVideo;
