import { FC } from "react";

type CardBigProps = {
  label: string;
  ternaryCardBig: boolean;
  types: Array<{ id: number; name: string; url: string }>;
};

const CardBig: FC<CardBigProps> = ({}) => {
  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center"></p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Lion King
            </div>
            <p className="text-gray-700 text-base"></p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none"></p>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardBig;
