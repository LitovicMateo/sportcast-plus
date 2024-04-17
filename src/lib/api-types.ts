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
          altText: string;
          slug: string;
          caption: string;
        };
      };
      author: {
        node: {
          name: string;
        };
      };
      tags: {
        nodes: {
          name: string
        }[]
      }
      seo: {
        focuskw: string
      }
      categories: {
        nodes: {
          name: string;
          slug: string
        }[];
      };
    };
  };
}
