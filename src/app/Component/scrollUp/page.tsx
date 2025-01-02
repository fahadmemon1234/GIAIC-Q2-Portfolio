import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const Scroll = () => {
  return (
    <Link
      id="scrollUp"
      className="w-12 h-12 rounded-full bg-orange text-white fixed right-5 bottom-16 flex flex-wrap items-center justify-center transition-all duration-300 z-10"
      href="#"
      aria-label="scroll up"
    >
      <FaArrowUp size={20} />
    </Link>
  );
};

export default Scroll;
