import { PostAPI } from "@/lib/api-types";
import React from "react";
import BreakLine from "../UI/breakline";
import PostList from "./post-list";
import Link from "next/link";

type CategorySectionProps = {
	label: string;
	path: string;
	posts: PostAPI[];
};

const CategorySection: React.FC<CategorySectionProps> = ({ label, posts, path }) => {
	const filteredPosts = posts
		.filter((item) => item.categories.nodes[0].name.toLowerCase() === label.toLowerCase())
		.slice(0, 6);

	return (
		<section className={`${filteredPosts.length === 0 && "hidden"} w-full my-2`}>
			<Link href={`/${path}`}>
				<h2 className="mb-0 pb-0 px-4 md:px-0">{label.toUpperCase()}</h2>
			</Link>
			<BreakLine />
			<PostList posts={filteredPosts} showCategory={false} />
		</section>
	);
};

export default CategorySection;
