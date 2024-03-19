import { FC } from "react";

type CardBigProps = {
  label: string;
  ternaryCardBig: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const CardBig: FC<CardBigProps> = ({}) => {
  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex bg-blue-900 min-h-[600px] ">
        <div className=" bg-blue-900 p-4 flex flex-col leading-normal items-center">
          <img
            className=" lg:w-64 lg:h-64 lg:mr-2 fill-current w-32 h-32 flex items-center lg:mb-8"
            src="src/assets/le_roi_lion.jpeg"
            alt="Lion King"
          ></img>

          <div className="lg:flex lg:flex-col lg:gap-2">
            <div className="text-white font-bold text-xl mb-2 flex justify-center pt-8 lg:pt-0">
              Lion King
            </div>
            <h2 className="text-blue-100 text-lg font-bold pt-4 lg:pt-0">
              Synopsis
            </h2>
            <p className="text-blue-100 text-base flex pt-4 lg:pt-0">
              Le Roi Lion : tout savoir sur le plus célèbre des lions L'histoire
              met en scène le roi Mufasa, qui règne avec bienveillance sur la
              savane. Il est accompagné de sa femme, la reine Sarabi, et de leur
              fils adorable, Simba. Tout bascule lorsque le frère de Mufasa, le
              lion Scar, envahi de jalousie, souhaite s'emparer du trône.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardBig;
