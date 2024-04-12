export interface FetchPostsAPI {
  data: {
    posts: {
      nodes: PostAPI[];
    };
    extensions: {};
  };
}

export type PostAPI = {
  excerpt: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug: string;
  title: string;
  author: {
    node: {
      firstName: "string";
    };
  };
  categories: {
    nodes: {
      name: string;
      slug: string
    }[];
  };

};

export interface SinglePostAPI {
  data: {
    post: {
      date: string;
      excerpt: string;
      content: any;
      slug: string;
      title: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
      author: {
        node: {
          name: string;
        };
      };
      categories: {
        node: {
          name: string;
        }[];
      };
    };
  };
}
