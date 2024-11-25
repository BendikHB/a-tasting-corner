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
    <div className="p-12 md:p-20 mx-auto max-w-7xl flex gap-4 md:gap-7 justify-center flex-wrap">
      {data.map((cta, idx) => {
        return (
          <div key={cta.title + idx}>
            <Link href={cta.link}>
              <button
                type="button"
                className="border rounded-sm py-2 px-5 text-xl min-w-60 min-h-20 duration-300 hover:bg-light"
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
