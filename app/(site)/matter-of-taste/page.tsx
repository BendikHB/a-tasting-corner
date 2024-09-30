import { getPage, getPosts } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import React from "react";

export default async function Page() {
  const page = await getPage("projects");
  const projects = await getPosts();

  return (
    <>
      {page && (
        <div>
          <h1 className="text-5xl">{page.title}</h1>
          {projects && (
            <div className="max-w-5xl mx-auto py-20">
              {projects.map((project) => {
                return (
                  <div key={project.name}>
                    <h2>{project.name}</h2>
                  </div>
                );
              })}
            </div>
          )}
          <div>
            <PortableText value={page.content} />
          </div>
        </div>
      )}
    </>
  );
}