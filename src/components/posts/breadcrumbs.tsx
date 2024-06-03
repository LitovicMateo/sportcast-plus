"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import { SinglePostAPI } from "@/app/actions/fetchSinglePost";

type BreadCrumbsMenuProps = {
  post: SinglePostAPI;
};

const BreadcrumbsMenu: React.FC<BreadCrumbsMenuProps> = ({ post }) => {
  return (
    <Breadcrumbs radius="full" variant="solid" className="p-2 mx-auto max-w-[720px] w-full">
      <BreadcrumbItem>
        <Link href={"/"}>Naslovnica</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href={`/${post.data.post.categories.nodes[0].slug}`}>{post.data.post.categories.nodes[0].name}</Link>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default BreadcrumbsMenu;
