import React from "react";
import CenteredBox from "./CenteredBox";

interface TopPageProps {
  onStartClick: () => void;
}

const TopPage: React.FC<TopPageProps> = ({ onStartClick }) => {
  return (
    <CenteredBox>
      <h1 className="text-3xl text-gray-700">Welcome to decision making App</h1>
      <h2 className="text-2xl text-gray-800 mt-8">
        治療の意思決定を支援するアプリケーションです
      </h2>
      <p className="text-lg font-semibold text-blue-500 mt-14">
        Give it a try!
      </p>
      <button
        className="text-lg text-white bg-blue-500 hover:bg-blue-400 rounded px-4 py-2 mt-14"
        onClick={onStartClick}
      >
        Get Started
      </button>
    </CenteredBox>
  );
};

export default TopPage;
