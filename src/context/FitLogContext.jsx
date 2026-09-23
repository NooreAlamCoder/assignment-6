"use client";

import React, { createContext, useContext, useState } from "react";

const FitLogContext = createContext();

const FitLogContextProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        setPlan,
        setSaved,
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