"use client";

import React from "react";
import Toast from "@/components/Toast";
import { useFitLog } from "@/context/FitLogContext";

const ToastContainer = () => {
  const { toast, showToast } = useFitLog();

  return (
    <Toast
      message={toast}
      onClose={() => showToast("")}
    />
  );
};

export default ToastContainer;