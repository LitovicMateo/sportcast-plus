import { PostAPI } from "@/lib/api-types";
import React from "react";
import PostGridItem from "./post-grid-item";

type PostListProps = {
  posts: PostAPI[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
    if (posts.length === 0) {
        return <p>No posts available.</p>
    }
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0 w-full">
      {posts.map((post: PostAPI) => (
        <PostGridItem post={post} key={post.slug} />
      ))}
    </section>
  );
};

export default PostList;
