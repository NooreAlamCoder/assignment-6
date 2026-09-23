"use client";

import React from "react";

const Toast = ({ message, onClose }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex items-center gap-3 rounded-lg border border-[#343941] bg-[#15181e] px-4 py-3 shadow-lg">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-[9px] font-bold text-black">
          ✓
        </span>

        <p className="text-[9px] font-medium text-white">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="ml-1 text-[12px] text-[#858b96] transition hover:text-white"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;