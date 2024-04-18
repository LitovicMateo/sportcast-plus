import React from "react";

const SinglePostLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="mx-auto mb-6">{children}</main>;
};

export default SinglePostLayout;
