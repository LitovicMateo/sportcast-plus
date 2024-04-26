import { FetchPostsAPI, PostAPI } from "@/lib/api-types";
import FeaturedPost from "@/components/posts/post-featured";
import PostList from "@/components/posts/post-list";
import FeaturedVideo from "@/components/posts/featured-video";
import { isFetchError } from "@/lib/isFetchErrors";
import CategorySection from "@/components/posts/CategorySection";
import { navItems } from "@/lib/categories";
import { Suspense } from "react";

const apiEndpoint =
	process.env.NODE_ENV === "production"
		? process.env.NEXT_PUBLIC_HOST_API_ENDPOINT
		: process.env.NEXT_PUBLIC_LOCAL_API_ENDPOINT;

export default async function Home() {
	const postListRes = await fetch(`${apiEndpoint}/api/posts/recent/`, { cache: "no-store" });
	const postListData: FetchPostsAPI = await postListRes.json();

	const fetchError = isFetchError(postListData);

	// posts 2-7
	const firstSectionPosts = postListData.data.posts.nodes.slice(1, 7);

	return (
		<main className="flex min-h-screen flex-col items-center gap-8 pt-0 md:pt-12 pb-6 ">
			{!fetchError.isError && (
				<>
					<FeaturedPost post={postListData.data.posts.nodes[0]} />
					<PostList posts={firstSectionPosts} showCategory />
				</>
			)}
			<FeaturedVideo />
			<Suspense>
				{navItems.map((item) => {
					return (
						<CategorySection
							key={item.path}
							label={item.label}
							path={item.path}
							posts={postListData.data.posts.nodes}
						/>
					);
				})}
			</Suspense>
		</main>
	);
}
