import Image from "next/image";
import React from "react";
import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: { post: string };
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);

  return (
    <div className=" w-3/5 mx-auto py-20 my-10 border">
      <div className="h-[500px] max-w-5xl mx-auto">
        <div className="h-full w-full relative">
          {post?.image && (
            <Image
              src={post.image}
              alt={post.alt}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          )}
          <div className="absolute bg-light -bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 w-1/3">
            <p className="font-CormorantUpright text-xl text-center">
              Matter of taste
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto my-14">
        <h1 className="text-5xl">{post.heading}</h1>
        <div className="mt-4">
          <PortableText value={post.content} />
        </div>
      </div>
    </div>
  );
}
