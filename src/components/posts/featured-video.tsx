import React from "react";

const FeaturedVideo = () => {
  return (
    <div className="relative w-full h-fit py-6 border-t-2 border-b-2 border-solid border-brand  flex flex-col justify-center items-center">
      <iframe
        src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UUon5iIws-cixVGo9QPjJI3w"
        width="600"
        height="340"
        allowFullScreen
      ></iframe>
      <div className="absolute top-50 w-full bg-brand h-[2px] opacity-10 -z-10"></div>
    </div>
  );
};

export default FeaturedVideo;
