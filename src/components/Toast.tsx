import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

interface ToastProps {
  message: string;
  type: "success" | "error";
  show: boolean;
  closeToast: () => void;
}

const Toast = ({ message, type, show = false, closeToast }: ToastProps) => {
  return (
    <div className="absolute bottom-8 left-8">
      <div
        role="alert"
        className={`alert alert-${type} ${show ? "" : "hidden"}`}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 text-base-100 items-center">
            <FaCheck />
            <span>{message}</span>
          </div>
          <div>
            <button className="btn btn-sm btn-ghost" onClick={closeToast}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
