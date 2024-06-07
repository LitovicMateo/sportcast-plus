import React from "react";
import Tag from "../UI/tag";

type TagsProps = {
  tags: {
    name: string;
  }[];
};

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap w-[540px] mx-auto items-center justify-start gap-2 overflow-x-scroll scrollbar-hide">
      {tags.map((tag) => (
        <Tag tag={tag.name} key={tag.name} />
      ))}
    </div>
  );
};

export default Tags;
