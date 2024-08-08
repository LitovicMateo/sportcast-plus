"use server";

import {  PostData } from "@/lib/api-types";
import { normalizeString } from "@/lib/normalizeString";
import { gql } from "@apollo/client";
import { getClient } from "@faustwp/experimental-app-router";

export const fetchPostsByTag = async (tag: string) => {
  const transformedTag = normalizeString(tag.replace("-", " "));

  const query = gql`
    {
      tag(id: "${transformedTag}", idType: NAME) {
        posts {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            id
            content
            date
            slug
            title
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
          }
        }
      }
    }
  `;

  const client = await getClient()
  const { data }: {data: {tag: {posts: {nodes: PostData[]}}}} = await client.query({query})

  return data.tag.posts.nodes

};
