import { ArrowRight } from "@/public/icons/arrow-right";
import { Wines } from "@/types/Wines";
import Image from "next/image";
import Link from "next/link";

interface IDrinkCard {
  data: Wines;
  basePath: string;
}

const WineCard = ({ data, basePath }: IDrinkCard) => {
  const { name, slug, image, alt, type, region, vintage } = data;
  const newSlug = basePath + slug;

  let typeString;
  switch (type) {
    case "rod":
      typeString = "Rød";
      break;
    case "rose":
      typeString = "Rosé";
      break;
    default:
      typeString = type;
      break;
  }

  let regionString;
  switch (region) {
    case "sor-afrika":
      regionString = "Sør Afrika";
      break;
    default:
      regionString = region;
      break;
  }

  return (
    <Link href={newSlug} className="flex flex-col flex-grow max-w-[300px]">
      <div className="h-[120px] w-full md:h-[200px] md:w-[300px] relative">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 300px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="shadow-md p-3 md:p-4 pt-3 flex-grow flex flex-col">
        <h3 className="text-base">{name}</h3>
        <div className="flex flex-col gap-1 md:flex-row justify-between md:items-end flex-grow">
          <div className="flex flex-wrap gap-3 text-xs pt-2 pb-1 md:pb-0">
            <div className="pb-1 md:pb-0">
              <p className="font-medium">Type:</p>
              <p className="capitalize">{typeString}</p>
            </div>
            <div className="pb-1 md:pb-0">
              <p className="font-medium">Land:</p>
              <p className="capitalize">{regionString}</p>
            </div>
            {vintage && (
              <div>
                <p className="font-medium">Årgang:</p>
                <p>{vintage}</p>
              </div>
            )}
          </div>
          <div className="hidden md:block pb-[3px]">
            <ArrowRight width={38} height={8} color="#000" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WineCard;
