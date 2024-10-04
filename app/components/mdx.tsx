import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";


const components = {
  h1: ({ children }) => (<h1 className="text-3xl lg:text-4xl font-thin mb-2 mt-4">{children}</h1>),
  h2: ({ children }) => (<h2 className="text-2xl lg:text-3xl font-thin mb-2 mt-4">{children}</h2>),
  h3: ({ children }) => (<h3 className="text-xl lg:text-2xl font-thin mb-2 mt-4">{children}</h3>),
  p: ({ children }) => (<p className="text-justify lg:leading-7">{children}</p>),
};

export const CustomMDX = (props) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};
