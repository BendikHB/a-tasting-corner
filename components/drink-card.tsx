import { ArrowRight } from "@/public/icons/arrow-right";
import { Drink } from "@/types/Drinks";
import Image from "next/image";
import Link from "next/link";

interface IDrinkCard {
  data: Drink;
  basePath: string;
}

const DrinkCard = ({ data, basePath }: IDrinkCard) => {
  const { name, slug, strength, taste, amount_ingredients, image } = data;
  const newSlug = basePath + slug;

  let strengthString;
  switch (strength) {
    case "low":
      strengthString = "Low in alcohol";
      break;
    case "medium":
      strengthString = "Normal";
      break;
    case "high":
      strengthString = "High in alcohol";
      break;
    default:
      strengthString = "Non alcoholic";
      break;
  }

  let ingredientsString;
  switch (amount_ingredients) {
    case "2":
      ingredientsString = "Simple with two ingredients";
      break;
    case "3":
      ingredientsString = "Simple with three ingredients";
      break;
    case "4":
      ingredientsString = "Intermediate with four ingredients";
      break;
    case "5":
      ingredientsString = "Complex with five ingredients";
      break;
    case "6":
      ingredientsString = "Complex with six ingredients";
      break;
    case "0":
      ingredientsString = "Over six ingredients";
      break;
    default:
      ingredientsString = " ";
      break;
  }

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
        <p className="text-xs">{ingredientsString}</p>
        <div className="flex flex-col gap-1 md:flex-row justify-between md:items-end flex-grow">
          <div className="flex flex-wrap gap-3 text-xs pt-2 pb-1 md:pb-0">
            <div className="pb-1 md:pb-0">
              <p className="font-medium">Taste:</p>
              <p>{taste}</p>
            </div>
            {strengthString && (
              <div>
                <p className="font-medium">Alcohol:</p>
                <p>{strengthString}</p>
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

export default DrinkCard;
