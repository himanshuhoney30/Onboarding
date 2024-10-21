import classNames from "classnames";
import dashBoardImageSrc from "../../../assets/Image1.png"
import dashBoardImage from "../../../assets/Image1.png"

interface Props {
  step: number;
}

const renderStepContent = (currentStep: number) => {
  switch (currentStep) {
    case 1: return dashBoardImage;
    case 2:
    case 3:
    default: return;
  }
};

export default function RightScreen(props: Props) {
  return (
    <div className={classNames("bg-[#10152a] flex flex-col justify-between", "w-full md:w-1/2 h-screen full hidden md:flex")}>
      <div className="fixed mt-24 ml-24 h-3/4 w-3/4">
        {/* Display the image with the Figma styles applied */}
        <img
          src={renderStepContent(props.step)}
          alt="Onboarding step"
          className="w-screen  box-border p-6 border-2 border-[#42DBF4]/20 shadow-[0px_4px_91px_30px_rgba(66,219,244,0.13)] rounded-[26.589px]"
        />
      </div>
    </div>

  )
}
