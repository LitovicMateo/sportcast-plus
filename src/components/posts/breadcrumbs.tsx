"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { SinglePostAPI } from "@/lib/api-types";
import Link from "next/link";

type BreadCrumbsMenuProps = {
  post: SinglePostAPI;
};

const BreadcrumbsMenu: React.FC<BreadCrumbsMenuProps> = ({ post }) => {
  return (
    <Breadcrumbs radius="full" variant="solid" className="p-2">
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
