import { ArrowRight } from "@/public/icons/arrow-right";
import { Post } from "@/types/Posts";
import Image from "next/image";
import Link from "next/link";

interface ICard {
  data: Post;
  basePath: string;
}

const Card = ({ data, basePath }: ICard) => {
  const { name, slug, image, excerpt } = data;
  const newSlug = basePath + slug;

  return (
    <Link href={newSlug} className="flex flex-col flex-grow">
      <div className="h-[120px] w-full md:h-[200px] md:w-[300px] relative">
        <Image
          src={image}
          alt={"image of " + name}
          fill
          sizes="(max-width: 768px) 50vw, 300px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="shadow-md p-4 pt-3 flex-grow flex flex-col">
        <h3 className="text-lg">{name}</h3>
        <p className="text-xs">{excerpt}</p>
        <div className="hidden md:flex justify-end pb-[3px]">
          <ArrowRight width={38} height={8} color="#000" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
