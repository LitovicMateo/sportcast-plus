"use client";

import { FetchPostsAPI, PostAPI } from "@/lib/api-types";
import React, { useEffect, useState } from "react";
import ArticleListItem from "./ArticleListItem";

type ArticleListProps = {
  pagination?: boolean;
  posts: PostAPI[];
};

const ArticleList: React.FC<ArticleListProps> = ({ posts, pagination }) => {
  const [page, setPage] = useState(1);
  const length = posts.length;
  const numOfPages = Math.floor(length / 3) + 1;
  console.log(numOfPages);

  const pages = new Array(numOfPages).fill(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [page])

  const pageHandler = (action: "increment" | "decrement") => {
    let newPage = page;

    if (action === "increment") {
      if (page * 3 > length) return;
      else {
        newPage++;
        setPage((page) => page + 1);
      }
    } else if (action === "decrement") {
      if (page === 1) return;
      else {
        newPage--;
        setPage((page) => page - 1);
      }
    }
  };

  if (pagination) {
    let paginatedPosts = posts.slice(page * 3 - 3, page * 3);
    return (
      <>
        <section className="flex flex-col w-full gap-6 md:gap-16 md:px-8 py-4 md:py-16 xl:w-[1200px] max-w-full mx-auto">
          {paginatedPosts.map((post) => (
            <ArticleListItem post={post} key={post.slug} />
          ))}
          <div className="flex justify-center items-center mx-auto text-2xl w-[300px] gap-6">
            <button onClick={() => pageHandler("decrement")}>{"<"}</button>
            {pages.map((_, index) => {
              const p = index + 1;
              return (
                <span onClick={() => setPage(p)} className={`${p === page && "font-bold"} cursor-pointer`}>
                  {p}
                </span>
              );
            })}
            <button onClick={() => pageHandler("increment")}>{">"}</button>
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="flex flex-col w-full gap-6 md:gap-16 md:px-8 py-4 md:py-16 xl:w-[1200px] max-w-full mx-auto">
      {posts.map((post) => (
        <ArticleListItem post={post} key={post.slug} />
      ))}
    </section>
  );
};

export default ArticleList;
