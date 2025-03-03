import React from "react";

interface NameScreenProps {
    onNext: () => void;
    onBack: () => void;
}

const Screen4: React.FC<NameScreenProps> = ({ onNext, onBack }) => {

    const handleNext = (event: React.FormEvent) => {
        event.preventDefault();
        onNext();
    };

    return (
        <div className="h-[320px] w-[514px]">
            <h2 className="text-3xl font-bold text-start">You are all set!</h2>
            <h2 className="text-3xl font-bold text-start">This is where all your files come</h2>
            <h2 className="text-3xl font-bold text-start">to life with AI</h2>

            <div className="h-1 bg-[#30A530] mt-6"></div>
            <div className="h-1 bg-[#30A530] mt-2 mb-7"></div>
            <p className="text-sm text-gray-500 text-left mt-4 mb-4">
                Lorem ipsum dolor sit amet consectetur. Id nec massa ut rhoncus arcu in bibendum elementum porttitor. Quis dictumst nam tempor viverra vitae non. Auctor dapibus et sollicitudin habitasse in consectetur cras.
            </p>
            <div className="text-start"> 

            <button
                type="submit"
                className="h-[48px] w-[280px] bg-[#353A51] text-white py-3 rounded-lg hover:bg-gray-900"
                onClick={handleNext}
            >
                Next
            </button>
            </div>
        </div>
    );
};

export default Screen4;
