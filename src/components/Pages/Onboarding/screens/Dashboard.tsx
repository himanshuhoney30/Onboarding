import React from "react";

interface DashboardScreenProps {
    onNext: () => void;
}

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
                <div className="mb-4">
                    <label className="block text-gray-700">Where Did You Hear About Acadium</label>
                    <select id="source" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                        <option value="">Select an option</option>
                        <option>Social Media</option>
                        <option>University</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700">What Is Your Role</label>
                    <select id="role" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                        <option value="">Select an option</option>
                        <option>Student</option>
                        <option>Mentor</option>
                        <option>Employer</option>
                        <option>Other</option>
                    </select>
                </div>

                <button type="submit" className="h-[48px] w-[280px]  bg-[#353A51] text-white py-3 rounded-lg hover:bg-gray-900">
                    Join in
                </button>
            </form>
        </div>
    );
};

export default WelcomeScreen;
