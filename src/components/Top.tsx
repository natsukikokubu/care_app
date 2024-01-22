import React from "react";

interface TopPageProps {
  onStartClick: () => void;
}

const TopPage: React.FC<TopPageProps> = ({ onStartClick }) => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={onStartClick}>Get Started</button>
    </div>
  );
};

export default TopPage;
