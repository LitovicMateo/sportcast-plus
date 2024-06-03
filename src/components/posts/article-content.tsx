import React from "react";
import { SinglePostAPI } from "@/app/actions/fetchSinglePost";

type ArticleContentProps = {
	post: SinglePostAPI;
};

const ArticleContent: React.FC<ArticleContentProps> = ({ post }) => {



	const article = post.data.post.content
		.replaceAll("<p>", "<p class='article'>")
		.replaceAll("<h2>", "<h2 class='subtitle'>")
		.replaceAll("<li>", "<li class='list-item'>")
		.replaceAll("<ul>", "<ul class='list'>")
		.replaceAll("<blockquote><p class='article'", '<blockquote class="quote-container"><p class="quote"')
		.replaceAll(',', ', ')
		.replaceAll(/\s+/g, ' ')

	console.log(article);
	

	return (
		<article
			className="leading-8  text-left"
			dangerouslySetInnerHTML={{ __html: article }}
		></article>
	);
};

export default ArticleContent;
