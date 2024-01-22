import "./App.css";
import React from "react";
import TopPage from "./components/Top";

const StartButton: React.FC = () => {
  const handleStartClick = () => {
    console.log("Start button clicked!");
  };
  return (
    <div>
      <TopPage onStartClick={handleStartClick} />
    </div>
  );
};
export default StartButton;
