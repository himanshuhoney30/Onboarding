import React, { useState } from "react";

interface Slide {
    title: string;
    description: string;
}

const slides: Slide[] = [
    {
        title: "Start by importing a source",
        description: "Lorem ipsum dolor sit amet consectetur. Id nec massa ut rhoncus arcu in bibendum elementum porttitor. Quis dictumst nam tempor viverra vitae non. Auctor dapibus et sollicitudin habitasse in consectetur cras.",
    },
    {
        title: "Add Source to your collection",
        description: "Lorem ipsum dolor sit amet consectetur. Id nec massa ut rhoncus arcu in bibendum elementum porttitor. Quis dictumst nam tempor viverra vitae non. Auctor dapibus et sollicitudin habitasse in consectetur cras.",
    },
    {
        title: "Customize your bot",
        description: "Lorem ipsum dolor sit amet consectetur. Id nec massa ut rhoncus arcu in bibendum elementum porttitor. Quis dictumst nam tempor viverra vitae non. Auctor dapibus et sollicitudin habitasse in consectetur cras.",
    },
    {
        title: "Chat with your bot",
        description: "Lorem ipsum dolor sit amet consectetur. Id nec massa ut rhoncus arcu in bibendum elementum porttitor. Quis dictumst nam tempor viverra vitae non. Auctor dapibus et sollicitudin habitasse in consectetur cras.",
    },
];

const Carousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        } else {
            console.log("Start button clicked.");
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    // Helper function to render the SVG dots based on the current slide
    const renderDots = () => {
        return slides.map((_, index) => (
            <svg
                key={index}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="6" cy="6" r="6" fill={index === currentSlide ? "#42DBF4" : "#E5E5E5"} />
            </svg>
        ));
    };

    return (
        <>
            {/* Back Button */}
            <button
                onClick={handlePrev}
                className="absolute top-10 left-20 flex items-center text-[#0B102D] text-lg font-medium gap-2"
            >
                {/* SVG Arrow Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5" stroke="#0B102D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 19L5 12L12 5" stroke="#0B102D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                Back
            </button>

            <div className="relative w-[514px] h-[268px] text-start">
                {/* SVG Dots Indicator */}
                <div className="flex gap-2">
                    {renderDots()} {/* Dynamic dots */}
                </div>

                {/* Slide Content */}
                <div>
                    <h2 className="text-3xl font-bold text-[#0B102D]">{slides[currentSlide].title}</h2>
                    <div className="h-1 bg-green-500 mt-2"></div>
                    <div className="h-1 bg-green-500 mt-3 mb-4"></div>
                    <p className="text-gray-600 text-lg">{slides[currentSlide].description}</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        onClick={handleNext}
                        className="w-[40%] bg-[#353A51] text-white py-3 rounded-lg hover:bg-gray-900"
                    >
                        {currentSlide === slides.length - 1 ? "Start" : "Next"}
                    </button>
                </div>

                {/* Conditionally Render "Skip Features Survey" */}
                {currentSlide !== slides.length - 1 && (
                    <button
                        className="text-[#6D7081] underline mt-3"
                        onClick={handlePrev}
                    >
                        Skip Features Survey
                    </button>
                )}
            </div>
        </>
    );
};

export default Carousel;
