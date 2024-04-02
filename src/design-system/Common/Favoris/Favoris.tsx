import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type FavorisProps = {
  label: string;
};

const Favoris: FC<FavorisProps> = ({ label }) => {
  return (
    <div className="flex justify-center lg:py-12 py-6 bg-blue-900 ">
      <motion.button
        whileTap={{ scale: 3, x: "-10px", y: "10px" }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-600 py-1 px-2 rounded-full lg:w-12 lg:h-12 hover:text-blue-900 hover:bg-blue-100 border-blue-900 hover:border-blue-900 ml-2"
      >
        <Link to="">{label}</Link>
      </motion.button>
    </div>
  );
};
export default Favoris;
