import { PostAPI } from "@/lib/api-types";
import React from "react";
import PostGridItem from "./post-list-item";

type PostListProps = {
  posts: PostAPI[];
  showCategory?: boolean
};

const PostList: React.FC<PostListProps> = ({ posts, showCategory }) => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0 w-full">
      {posts.map((post: PostAPI) => (
        <PostGridItem post={post} key={post.slug} showCategory={showCategory} />
      ))}
    </section>
  );
};

export default PostList;
