import { gql } from "@apollo/client";
import { getAuthClient, onLogout } from "@faustwp/experimental-app-router";
import Link from "next/link";
import { redirect } from "next/navigation";

type ViewerAPI = {
  viewer: {
    name: string;
    posts: {
      nodes: {
        id: string;
        title: string;
        categories: {
          nodes: {
            name: string;
            slug: string;
          }[];
        };
        slug: string;
      }[];
    };
  };
};

export default async function Page() {
  const client = await getAuthClient();

  if (!client) {
    return redirect("/wp-login");
  }

  const { data }: { data: ViewerAPI } = await client.query({
    query: gql`
      query GetViewer {
        viewer {
          name
          posts {
            nodes {
              id
              title
              categories {
                nodes {
                  name
                  slug
                }
              }
              slug
            }
          }
        }
      }
    `,
  });

  return (
    <>
      <h2>Welcome {data.viewer.name}</h2>

      <h3>My Posts</h3>
      <ul>
        {data.viewer.posts.nodes.map((post) => (
          <li key={post.id}>
            <Link href={`/${post.categories.nodes[0].slug}/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <form action={onLogout}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
}
