import React, { useState } from 'react';
import { CustomSelectOption } from './interface';

interface Props {
  options: CustomSelectOption[]
}

const CustomSelect = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CustomSelectOption | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: CustomSelectOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="flex justify-between items-center p-4 w-[586px] h-[48px] border border-[#42DBF4] rounded-lg cursor-pointer"
      >
        <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_896_5545)">
            <path d="M6 9L12 15L18 9" stroke="#0B102D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_896_5545">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </div>

      {isOpen && (
        <ul className="absolute mt-1 w-full border border-[#42DBF4] rounded-lg bg-white z-10">
          {props.options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="p-3 hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
