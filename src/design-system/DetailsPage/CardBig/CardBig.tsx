import { FC } from "react";

type CardBigProps = {
  label: string;
  ternaryCardBig: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const CardBig: FC<CardBigProps> = ({}) => {
  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex lg:flex-col bg-blue-900 min-h-[600px] ">
        <div
          id="technical-description"
          className=" bg-blue-900 p-4 flex flex-col lg:flex-row leading-normal items-center lg:items-start "
        >
          <img
            className=" lg:w-64 lg:h-64 lg:mr-2 fill-current w-32 h-32 flex items-center lg:mb-8"
            src="src/assets/le_roi_lion.jpeg"
            alt="Lion King"
          ></img>

          <div className="lg:flex lg:flex-col lg:gap-2 lg:pl-8">
            <div
              id="title"
              className="flex items-center justify-center py-4 lg:py-8"
            >
              <h1 className="text-white font-bold text-3xl  flex justify-center ">
                Lion King
              </h1>
              <p className="text-white pl-2">(2019)</p>
            </div>
            <div className="flex flex-col items-start ">
              <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl">
                Budget
                <span className="text-base lg:text-xl  text-blue-200 pl-4">
                  160 M$
                </span>
              </h3>
              <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl">
                Revenu
                <span className="text-base lg:text-xl  text-blue-200 pl-4">
                  868 M$
                </span>
              </h3>
              <h3 className="text-blue-200 flex justify-center items-center lg:text-2xl">
                Recettes
                <span className="text-base lg:text-xl text-blue-200 pl-4">
                  {" "}
                  708 M$
                </span>
              </h3>
            </div>
          </div>
        </div>
        <h2 className="text-blue-100 text-lg lg:text-xl font-bold pt-8 px-4 h-16">
          Synopsis
        </h2>
        <p className="text-blue-100 text-base lg:text-lg flex pt-4 lg:pt-2 px-4">
          Le Roi Lion : tout savoir sur le plus célèbre des lions L'histoire met
          en scène le roi Mufasa, qui règne avec bienveillance sur la savane. Il
          est accompagné de sa femme, la reine Sarabi, et de leur fils adorable,
          Simba. Tout bascule lorsque le frère de Mufasa, le lion Scar, envahi
          de jalousie, souhaite s'emparer du trône.
        </p>
      </div>
    </div>
  );
};
export default CardBig;
