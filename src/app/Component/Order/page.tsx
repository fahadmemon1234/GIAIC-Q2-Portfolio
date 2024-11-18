import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center border-2 border-orange-500">
        <div className="text-orange-500 text-5xl mb-6">
          <FaCheckCircle className="mx-auto mb-4 " size={64} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Order is Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! We are processing your order and will
          send you an update soon.
        </p>

        <Link
          href="/"
          className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
