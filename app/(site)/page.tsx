import BackgroundVideoEmbed from "@/components/BackgroundVideoEmbed";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="mx-auto">
      <div className="p-2 grid grid-cols-6 grid-rows-2 gap-2 w-screen max-h-dvh overflow-hidden">
        <div className="col-start-1 col-end-4 row-span-2 w-full relative overflow-hidden pt-[100%]">
          <BackgroundVideoEmbed embed="https://player.vimeo.com/video/938212565" />
        </div>
        <div className="col-start-4 col-end-7 row-span-1 w-full bg-light"></div>
        <Link
          href={"/about"}
          className="col-start-4 col-end-7 row-span-1 w-full bg-dark flex justify-center items-center"
        >
          <div className="font-IbarraRealNova text-light text-7xl text-center w-full">
            About
          </div>
        </Link>
      </div>
    </div>
  );
}
