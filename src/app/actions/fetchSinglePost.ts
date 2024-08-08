"use server"

import { gql } from "@apollo/client";
import { getClient } from "@faustwp/experimental-app-router";


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
          name: string;
        }[];
      };
      seo: {
        focuskw: string;
      };
      categories: {
        nodes: {
          name: string;
          slug: string;
        }[];
      };
    };
  };
}


export async function fetchSinglePost(category:string, slug: string) {
  const client = await getClient()

  const postquery = gql`query FetchSinglePost {
    post(id: "${category}/${slug}", idType: URI) {
      date
      excerpt
      content
      slug
      title
      featuredImage {
        node {
          altText
          caption
          slug
          sourceUrl
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      author {
        node {
          name
        }
      }
      seo 
      {
        focuskw
      }
      tags {
        nodes {
          name
        }
      }
    }
  }`;

  
  const { data }: {data: {post: SinglePostAPI["data"]["post"]}} = await client.query({
    query: postquery,
  })

  return data;
}