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

  return (
    <Link href={slug}>
      <Image
        src={image}
        alt={"image of " + name}
        width={300}
        height={300}
        className="m-h-"
      />
      <div className="shadow-md">
        <h3>{name}</h3>
        <p>{amount_ingredients}</p>
        <div>
          <div>
            <p>{taste}</p>
            <p>{strengthString}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DrinkCard;
