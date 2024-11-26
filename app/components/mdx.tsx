import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import Image from "next/image";
import remarkGfm from 'remark-gfm'

const components = {
  h1: ({ children }) => (
    <h1 className="text-3xl lg:text-4xl font-thin mb-2 mt-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl lg:text-3xl font-thin mb-2 mt-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl lg:text-2xl font-thin mb-2 mt-4">{children}</h3>
  ),
  p: ({ children }) => <p className="text-justify lg:leading-7">{children}</p>,
  img: ({ alt, src }) => (
    <Image src={src} alt={alt} />
  ),
  ul: ({ children }) => <p>{children}</p>,
};

type Props = {
  source: string;
};

const options = {
  mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
  }
}

export const CustomMDX = (props: Props) => {
  return <MDXRemote {...props} components={{ ...components }} options={options} />;
};
