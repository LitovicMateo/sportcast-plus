export interface FetchPostsAPI {
    posts: {
      nodes: PostAPI[];
    };
    extensions: {};
 
}

export type PostAPI = {
  excerpt: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  content: string;
  date: string;
  slug: string;
  title: string;
  author: {
    node: {
      name: string;
    };
  };
  categories: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
};

export interface FetchPostByTagAPI {
  data: {
    tag: {
      posts: {
        nodes: PostAPI[];
      };
    };
  };
  extensions: {};
}