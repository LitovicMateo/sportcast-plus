export interface PostResponse {
  data: {
    posts: {
      nodes: PostData[];
    };
  },
  error?: Errors
}

export type PostData = {
  excerpt: string;
  featuredImage: { node: { sourceUrl: string } };
  id: string;
  date: string;
  slug: string;
  title: string;
  categories: { nodes: Array<{ name: string; slug: string }> };
  author: { node: { name: string } };
  content: string;
};

export type Errors = Array<{ message: string }>;


