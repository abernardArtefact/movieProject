import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type ButtonHeaderProps = {
  label: string;
  to: string;
};

const ButtonHeader: FC<ButtonHeaderProps> = ({ label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.button
      whileTap={{ scale: 3, x: "-10px", y: "10px" }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.8 }}
      className={`z-40 bg-blue-600 py-1 px-2 lg:px-6 lg:py-3 rounded-full text-blue-100 hover:text-blue-900 hover:bg-blue-100 border-blue-900 hover:border-blue-900 ml-2 lg:mx-4 mx-1 ${isActive ? "bg-white text-blue-900" : "bg-blue-600 text-blue-100 hover:text-blue-900 hover:bg-blue-100"}`}
    >
      <Link to={to}> {label}</Link>
    </motion.button>
  );
};
export default ButtonHeader;
