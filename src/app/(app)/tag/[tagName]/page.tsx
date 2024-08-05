import { fetchPostsByTag, TagResponse } from "@/app/actions/fetchPostsByTag";
import ArticleList from "@/components/ArticleList/List/ArticleList";
import React from "react";

type PageProps = {
  params: { tagName: string };
};

const TagNamePage: React.FC<PageProps> = async ({ params }) => {
  try {
    const postListRes = await fetchPostsByTag(params.tagName);
    const postListData: TagResponse = await postListRes.json();

    return (
      <ArticleList
        pagination
        articleOffset={4}
        posts={postListData.data.tag.posts.nodes}
      />
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Optionally, you can render an error message component here
    return <div>Error fetching posts. Please try again later.</div>;
  }
};

export default TagNamePage;
