import React from "react";
import CustomSelect from "../../../SelectElement";
import { CustomSelectOption } from "../../../SelectElement/interface";

interface DashboardScreenProps {
    onNext: () => void;
}

const options: CustomSelectOption[] = [
    { label: 'Student', value: 'student' },
    { label: 'Mentor', value: 'mentor' },
    { label: 'Employer', value: 'employer' },
    { label: 'Other', value: 'other' },
  ];
  
  const hear_about_options: CustomSelectOption[] = [
    { label: 'Social Media', value: 'social_media' },
    { label: 'University', value: 'university' },
    { label: 'Other', value: 'other' },
  ];

  
const WelcomeScreen: React.FC<DashboardScreenProps> = ({ onNext }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent page reload
        onNext(); // Call onNext after form validation
    };

    return (
        <div className="h-[414px] w-[514px] text-start">
            <h1 className="text-3xl font-bold text-[#0B102D] text-start">Welcome aboard!</h1>
            <p className="text-3xl font-bold text-[#0B102D] text-start ">We are glad you are here.</p>

            <div className="h-1 bg-[#30A530] mt-2"></div>
            <div className="h-1 bg-[#30A530] mt-3"></div>

            <p className="text-gray-600 mb-6 text-start mt-6">But first, we would like to know...</p>

            <form onSubmit={handleSubmit}>
                <label className="block text-gray-700">Where Did You Hear About Acadium</label>
                <CustomSelect options = {hear_about_options} />

                <label className="block text-gray-700 mt-6">Where Did You Hear About Acadium</label>
                <CustomSelect options = {options} />
                <button type="submit" className="h-[48px] w-[280px]  bg-[#353A51] text-white py-3 rounded-lg hover:bg-gray-900 mt-4">
                    Join in
                </button>
            </form>
        </div>
    );
};

export default WelcomeScreen;
