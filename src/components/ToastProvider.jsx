"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="dark"
    />
  );
};

export default ToastProvider;