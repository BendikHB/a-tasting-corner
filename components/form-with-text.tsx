import { PortableText, PortableTextBlock } from "next-sanity";
import FormComponent from "./Form";

export type TForm = {
  title?: string;
  text: PortableTextBlock[];
  bg?: boolean;
  form: string;
  label: string;
};

interface IForm {
  data: TForm;
}

const Form = ({ data }: IForm) => {
  const { title, text, bg, form, label } = data;
  const background = bg ? "bg-light" : "bg-white";
  const formDestination = form ? form : null;

  return (
    <section className={background + " w-full"}>
      <div className="mx-auto max-w-6xl md:w-3/4 px-8 md:px-12 py-10 md:py-20 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-24">
          <div className="text-3xl pb-4">
            <h2>{title}</h2>
          </div>
          <div>
            <PortableText value={text} />
          </div>
        </div>
        <div className="mt-3 md:w-1/2 border-l border-l-black">
          <FormComponent formDestination={formDestination} />
        </div>
      </div>
    </section>
  );
};

export default Form;
