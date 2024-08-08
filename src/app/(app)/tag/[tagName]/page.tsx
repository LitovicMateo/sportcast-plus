import { fetchPostsByTag } from "@/app/actions/fetchPostsByTag";
import ArticleList from "@/components/ArticleList/List/ArticleList";
import React from "react";

type PageProps = {
  params: { tagName: string };
};

const TagNamePage: React.FC<PageProps> = async ({ params }) => {

  const { tagName } = params
  const posts = await fetchPostsByTag(tagName);

    return (
      <ArticleList
        pagination
        articleOffset={4}
        posts={posts}
      />
    );
};

export default TagNamePage;
