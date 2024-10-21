import React, { useState } from "react";
import Dashboard from "./LeftScreens/Dashboard";
import Screen4 from "./LeftScreens/Screen4";
import Screen5 from "./LeftScreens/Screen5";
import classNames from "classnames";

interface Props {
  step: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
}

const steps = [
  { id: 1, label: "Dashboard" },
  { id: 2, label: "Screen4" },
  { id: 3, label: "Screen5" },
];

const LeftScreen = (props: Props) => {
  const renderStepContent = () => {
    switch (props.step) {
      case 1:
        return <Dashboard onNext={props.goToNextStep} />;
      case 2:
        return <Screen4 onNext={props.goToNextStep} onBack={props.goToPrevStep} />;
      case 3:
        return <Screen5 onNext={props.goToNextStep} onBack={props.goToPrevStep} />;
      default:
        return <Dashboard onNext={props.goToNextStep} />;
    }
  };

  return (
    <div
      className={classNames(
        "bg-[linear-gradient(0deg,rgba(255,255,255,0.6),rgba(255,255,255,0.6)),linear-gradient(0deg,#F5F5F5,#F5F5F5)]",
        "flex flex-col justify-between w-full md:w-1/2 h-full"
      )}
    >
      {/* Progress Bar - Uncomment if needed */}
      {/* <OnboardingProgressBar props.step={props.step} totalSteps={totalSteps} /> */}
      <div className="px-6 md:px-12 py-8 flex-grow overflow-y-auto flex flex-col items-center justify-center h-full text-center">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default LeftScreen;
