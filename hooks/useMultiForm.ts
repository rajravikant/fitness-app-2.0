import { Step} from "@/constants/types";
import { useState } from "react";


export const useMultiForm = (steps: Step[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const currentStep = steps[currentStepIndex];


  const next = () => {
    if (currentStepIndex === steps.length - 1) return;
    setCurrentStepIndex((prev) => prev + 1);
  };
  const back = () => {
    if (currentStepIndex === 0) return;
    setCurrentStepIndex((prev) => prev - 1);
  };
  const goTo = (index: number) => {
    if (index < 0 || index > steps.length - 1) return;
    setCurrentStepIndex(index);
  };
  return { step: currentStep, currentStepIndex, next, back, goTo };
};
