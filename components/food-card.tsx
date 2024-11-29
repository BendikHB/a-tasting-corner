import { ArrowRight } from "@/public/icons/arrow-right";
import { Food } from "@/types/Food";
import Image from "next/image";
import Link from "next/link";

interface IFoodCard {
  data: Food;
  basePath: string;
}

const FoodCard = ({ data, basePath }: IFoodCard) => {
  const { name, slug, mainIngredient, image, time, type } = data;
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
      <div className="shadow-md p-3 md:p-4 pt-3 flex-grow flex flex-col">
        <h3 className="text-base">{name}</h3>
        <p className="text-xs">{time}</p>
        <div className="flex flex-col gap-1 md:flex-row justify-between md:items-end flex-grow">
          <div className="flex flex-wrap gap-3 text-xs pt-2 pb-1 md:pb-0">
            <div className="pb-1 md:pb-0">
              <p className="font-medium">Main ingredient:</p>
              <p>{mainIngredient}</p>
            </div>
            <div>
              <p className="font-medium">Type:</p>
              <p>{type}</p>
            </div>
          </div>
          <div className="hidden md:block pb-[3px]">
            <ArrowRight width={38} height={8} color="#000" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
