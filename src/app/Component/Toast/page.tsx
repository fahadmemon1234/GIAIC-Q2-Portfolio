import React from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="fixed top-[100px] right-4 z-[9999999]">
      <div
        className={`flex items-center justify-between gap-4 w-[300px] ${bgColor} text-white px-4 py-3 rounded-lg shadow-lg animate-slideIn`}
      >
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="text-lg font-bold hover:text-gray-300"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
