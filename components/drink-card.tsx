import { ArrowRight } from "@/public/icons/arrow-right";
import { Drink } from "@/types/Drinks";
import Image from "next/image";
import Link from "next/link";

interface IDrinkCard {
  data: Drink;
}

const DrinkCard = ({ data }: IDrinkCard) => {
  const { name, slug, strength, taste, amount_ingredients, image } = data;

  let strengthString;
  switch (strength) {
    case "low":
      strengthString = "Low in alcohol";
      break;
    case "medium":
      strengthString = "Regular amount for drinks";
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
    <Link href={slug}>
      <div className="h-[200px] w-[300px] relative">
        <Image
          src={image}
          alt={"image of " + name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="shadow-md p-4 pt-3">
        <h3 className="text-lg">{name}</h3>
        <p className="text-xs">{ingredientsString}</p>
        <div className="flex justify-between items-end">
          <div className="flex gap-3 text-xs pt-2">
            <p>{taste}</p>
            <p>{strengthString}</p>
          </div>
          <ArrowRight width={38} height={8} color="#000" />
        </div>
      </div>
    </Link>
  );
};

export default DrinkCard;
