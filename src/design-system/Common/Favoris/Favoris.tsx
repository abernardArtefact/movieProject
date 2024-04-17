import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type FavorisProps = {
  label: string;
  to: string;
};

const Favoris: FC<FavorisProps> = ({ label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to="/favorisPage"
      className="flex justify-center items-center lg:py-12 py-6 bg-blue-900 "
    >
      <div className="flex items-center ">
        <div className="absolute right-[80px] z-10"> {label}</div>

        <motion.button
          whileTap={{ scale: 3, x: "-10px", y: "10px" }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.8 }}
          className={`relative flex justify-center items-center bg-blue-600 py-1 px-2 rounded-full lg:w-12 lg:h-12 hover:text-blue-900 hover:bg-blue-100 border-blue-900 hover:border-blue-900 ${isActive ? "bg-white text-blue-900" : "bg-blue-600 text-blue-100 hover:text-blue-900 hover:bg-blue-100"}`}
        ></motion.button>
      </div>
    </Link>
  );
};
export default Favoris;
