import { PostAPI } from "@/lib/api-types";
import { transformDate } from "@/lib/transformDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostGridItemProps = {
	post: PostAPI;
	showCategory?: boolean;
};

const PostGridItem: React.FC<PostGridItemProps> = ({ post, showCategory }) => {
	const date = transformDate(post.date);
	return (
		<div className="w-full h-full text-ellipsis relative bg-white rounded-b-sm">
			<Link href={`/${post.categories.nodes[0].slug}/${post.slug}`}>
				<div className="relative">
					<div className="aspect-[16/9] overflow-hidden flex justify-center items-center rounded-md">
						<Image
							className=" min-h-full min-w-full rounded-md"
							src={post.featuredImage?.node.sourceUrl || ""}
							height={300}
							width={500}
							alt={post.title}
						/>
					</div>
					{showCategory !== undefined && showCategory && (
						<span className="absolute bottom-0 text-[8px] md:text-xs bg-brand text-accent font-semibold uppercase py-1 px-2 rounded-bl-md rounded-tr-md">
							{post.categories.nodes[0].name}
						</span>
					)}
				</div>
				<div className="flex items-center justify-between text-[8px] md:text-xs text-gray-400 ">
					<span className=" text-brand uppercase pt-1 md:py-1 rounded-bl-sm text-[10px] font-[300]">
						{date}
					</span>
				</div>
				<h2 className="py-1 text-[12px] md:text-base text-brand">{post.title}</h2>
			</Link>
		</div>
	);
};

export default PostGridItem;
