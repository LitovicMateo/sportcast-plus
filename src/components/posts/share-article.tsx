"use client";

import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

type ShareArticleProps = {
    url: string
}

const ShareArticle: React.FC<ShareArticleProps> = ({url}) => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-2">
        <h3 className="uppercase font-[600]">Podijeli ovaj članak</h3>
      <div className="flex justify-center items-center gap-6">
        <FacebookShareButton
          hashtag="#sportcastplus"
          url={url}
          title="SportCastPlus"
        >
          <FacebookIcon size={36} round />
        </FacebookShareButton>
        <FacebookMessengerShareButton
          appId={"6147615245363305"}
          url={url}
        >
          <FacebookMessengerIcon size={36} round />
        </FacebookMessengerShareButton>
        <TwitterShareButton
          hashtags={["sportcastplus"]}
          url={url}
        >
          <TwitterIcon size={36} round />
        </TwitterShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={36} round />
        </WhatsappShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon size={36} round />
        </TelegramShareButton>
      </div>
    </section>
  );
};

export default ShareArticle;
