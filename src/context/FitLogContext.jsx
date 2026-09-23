"use client";

import React, {
  createContext,
  useContext,
  useState,
} from "react";

const FitLogContext = createContext();

const FitLogContextProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        setPlan,
        setSaved,
        toast,
        showToast,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  return useContext(FitLogContext);
};

export default FitLogContextProvider;