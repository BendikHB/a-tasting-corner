import Link from "next/link";

export type TButtonList = {
  link: string;
  title: string;
};
export interface IButtonList {
  data: TButtonList[];
}

const ButtonList = ({ data }: IButtonList) => {
  return (
    <div className="p-20 mx-auto max-w-7xl flex gap-7 justify-center">
      {data.map((cta, idx) => {
        return (
          <div key={cta.title + idx}>
            <Link href={cta.link}>
              <button
                type="button"
                className="border rounded-sm py-2 px-5 text-xl min-w-60 min-h-20"
              >
                {cta.title}
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;