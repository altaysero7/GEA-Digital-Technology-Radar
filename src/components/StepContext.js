import React, { createContext, useContext, useState } from "react";

const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [companyUrl, setCompanyUrl] = useState("");

  const nextStep = (url) => {
    if (url) setCompanyUrl(url);
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const reset = () => setStep(1);

  return (
    <StepContext.Provider
      value={{ step, companyUrl, nextStep, prevStep, reset }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useStepContext = () => useContext(StepContext);
