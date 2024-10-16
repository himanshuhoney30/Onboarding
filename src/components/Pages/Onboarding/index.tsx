import React, { useEffect, useState } from "react";
// import NavigationButtons from "./NavigationButtons";
import Dashboard from "./screens/Dashboard";
import Screen4 from "./screens/Screen4";
import Screen5 from "./screens/Screen5";
import classNames from "classnames";

// Import all the images for each screen

const Onboarding = () => {

    const steps = [
        { id: 1, label: "Dashboard" },
        { id: 2, label: "Screen4" },
        { id: 3, label: "Screen5" },
    ];

    const totalSteps = steps.length;

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [userData, setUserData] = useState({
        dashboard: "",
        screen4: "",
        screen5: "",
       
    });

    useEffect(() => {
        console.log(userData);

    }, [userData])

    const goToNextStep = (currentStep: number) => {
        let next = currentStep + 1;
        if (currentStep === 3) {
        }
        return next <= totalSteps ? next : currentStep;
    };

    const goToPrevStep = (currentStep: number) => {
        let prev = currentStep - 1;
        return prev >= 1 ? prev : currentStep;
    };

    const nextStep = () => setCurrentStep(goToNextStep(currentStep));
    const prevStep = () => setCurrentStep(goToPrevStep(currentStep));

    const handleSetUserData = (data: Partial<typeof userData>) => {
        console.log(data);

        setUserData((prev) => ({ ...prev, ...data }));
    };
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return {
                    content: <Dashboard onNext={nextStep} />,
                };
            case 2:
                return {
                    content: <Screen4 onNext={nextStep} onBack={prevStep} userData={userData} setUserData={handleSetUserData} />,
                };
            case 3:
                return {
                    content: <Screen5 onNext={nextStep} onBack={prevStep} userData={userData} setUserData={handleSetUserData} />,
                };
            default:
                return {
                    content: <Dashboard onNext={nextStep} />,
                };
        }
    };

    const { content, image } = renderStep();

    return (
        <div className="flex items-center justify-center h-screen">
            {/* Left Onboarding Card */}

            <div className={classNames(
                "bg-[linear-gradient(0deg,rgba(255,255,255,0.6),rgba(255,255,255,0.6)),linear-gradient(0deg,#F5F5F5,#F5F5F5)] flex flex-col justify-between",
                currentStep === 6 ? "w-full max-w-5xl h-full" : "w-full max-w-3xl h-full")}>
                {/* Progress Bar */}
                {/* <OnboardingProgressBar currentStep={currentStep} totalSteps={totalSteps} /> */}
                <div className="px-12 py-8 flex-grow overflow-y-auto flex flex-col items-center justify-center h-full text-center">
                    {content}
                </div>
            </div>

            {/* Right Onboarding Card */}
            <div
                className={classNames(
                    "bg-[#10152a] flex flex-col justify-between",
                    currentStep === 6 ? "w-full max-w-5xl h-full" : "w-full max-w-3xl h-full",
                    "hidden md:block")}>
                <div className="flex items-center justify-center h-full">
                    {/* Display the image based on the current step */}
                    <img src={image} alt="Onboarding step" className="mt- w-450px h-96" />
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
