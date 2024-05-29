import { Metadata } from "next";
import React from "react";
import { navItems } from "../../../lib/categories";

type MetadataProps = {
	params: { categoryId: string };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
	const title = navItems.filter((nav) => nav.path === params.categoryId);
	console.log(title, params);
	
	return {
		title: title[0].label,
		description: "Dobrodošli na Sportcast Plus, mjesto na kojem sport prestravlja puno više od onoga što se događa na terenu!",
	};
}

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="">
			{children}
		</main>
	);
};

export default CategoryLayout;
