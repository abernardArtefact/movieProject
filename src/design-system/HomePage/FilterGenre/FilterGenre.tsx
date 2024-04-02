import { FC, SetStateAction } from "react";
import { useState } from "react";

type FilterGenreProps = {
  label: string;
};

const FilterGenre: FC<FilterGenreProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const [selectedLabel, setSelectedLabel] = useState(label);
  const handleSelection = (year: SetStateAction<string>) => {
    setSelectedLabel(year);
    setIsOpen(false);
  };
  return (
    <div
      onClick={handleIsOpen}
      className="relative inline-block text-left px-3 py-3 "
    >
      <div>
        <button
          type="button"
          className=" inline-flex w-[110px]  justify-center gap-x-1.5 rounded-lg bg-blue-900 px-3 py-2 text-sm font-semibold text-blue-200 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-200 hover:text-blue-900"
          id="menu-button"
          aria-expanded={isOpen}
        >
          {selectedLabel}
          <svg
            className="mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <>
        {isOpen ? (
          <ul
            className={` w-[106px] border absolute top-14 z-10 bg-blue-200  text-blue-900 font-semibold ring-1 ring-inset ring-blue-300 rounded-lg `}
          >
            {[
              "SF",
              "Aventure",
              "Comique",
              "Romantique",
              "Animation",
              "Thriller",
            ].map((year) => (
              <li
                key={year}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelection(year);
                }}
                className={`relative h-[40px] mx-6 grid  font-light place-content-center `}
              >
                {year}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default FilterGenre;
