import { Metadata } from "next";
import React from "react";
import { navItems } from "../../../lib/categories";

type MetadataProps = {
	params: { categoryId: string };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
	const title = navItems.filter((nav) => nav.path === params.categoryId);

	return {
		title: title[0].label,
		description: "Dobrodošli na Sportcast Plus, mjesto na kojem sport prestravlja puno više od onoga što se događa na terenu!",
	};
}

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="w-full md:w-[80%] lg:w-[800px] mt-4 mx-auto min-h-svh overflow-hidden">
			{children}
		</main>
	);
};

export default CategoryLayout;
