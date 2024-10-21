import { getPage, getPosts } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import React from "react";

export default async function Page() {
  const page = await getPage("matter-of-taste");
  const posts = await getPosts();

  console.log(posts, "posts");

  return (
    <>
      {page && (
        <div>
          <h1 className="text-5xl">{page.name}</h1>
          {posts && (
            <div className="max-w-5xl mx-auto py-20">
              {posts.map((post) => {
                return (
                  <div key={post._id}>
                    <h2>{post.name}</h2>
                  </div>
                );
              })}
            </div>
          )}
          <div>
            <PortableText value={page.intro} />
          </div>
        </div>
      )}
    </>
  );
}
