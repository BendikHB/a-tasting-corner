import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex items-center justify-between">
        <h1>{project.name}</h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          view project
        </a>
      </header>
      <div>
        <PortableText value={project.content}></PortableText>
      </div>
    </div>
  );
}
