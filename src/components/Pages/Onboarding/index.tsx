import React, { useEffect, useState } from "react";
import classNames from "classnames";
import RightScreen from "./RightScreen";
import LeftScreen from "./index1"


// Import all the images for each screen if needed

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const goToNextStep = () => { setCurrentStep(currentStep + 1) }
  const goToPrevStep = () => { setCurrentStep(currentStep - 1) }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      <LeftScreen step={currentStep} goToPrevStep={goToPrevStep} goToNextStep={goToNextStep} />
      <RightScreen step={currentStep} />
    </div>
  );
};

export default Onboarding;
