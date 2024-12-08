import { LiaShippingFastSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";

const TopBar = () => {
  return (
    <header className="bg-[#2a254b] text-white py-3 px-6">
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center text-center mx-auto gap-3">
          <LiaShippingFastSolid className="text-xl" />
          <p className="text-sm">
            Free delivery on all orders over £50 with code easter at checkout
          </p>
        </div>

        {/* Right Section */}
        <button
          className="text-white hover:text-gray-400 text-lg focus:outline-none"
          aria-label="Close"
        >
          <AiOutlineClose />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
