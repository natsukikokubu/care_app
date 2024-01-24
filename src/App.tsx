import React from "react";
import TopPage from "./pages/Top";

const StartButton: React.FC = () => {
  const handleStartClick = () => {
    console.log("Start button clicked!");
  };
  return (
    <div className="bg-blue-200">
      <TopPage onStartClick={handleStartClick} />
    </div>
  );
};
export default StartButton;
