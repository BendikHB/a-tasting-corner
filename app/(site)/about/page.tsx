import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

export default async function Page() {
  const page = await getPage("about");

  return (
    <>
      {page && (
        <div>
          <h1 className="text-5xl">{page.title}</h1>
          <div>
            <PortableText value={page.content} />
          </div>
        </div>
      )}
    </>
  );
}
