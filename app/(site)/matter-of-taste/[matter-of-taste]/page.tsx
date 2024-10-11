import { PortableText } from "next-sanity";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  return (
    <div className="max-w-3xl mx-auto py-20">
      <div className="flex items-center justify-between">
        <h1>Temp</h1>
      </div>
    </div>
  );
}
