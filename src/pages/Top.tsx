import React from "react";
import { CenteredBox } from "../components/CenteredBox";
import { Button } from "../components/Button";

type Props = {
  onStartClick: () => void;
};

const TopPage: React.FC<Props> = ({ onStartClick }) => {
  return (
    <CenteredBox>
      <h1 className="text-3xl text-gray-700">Welcome to decision making App</h1>
      <h2 className="text-2xl text-gray-800 mt-8">
        治療の意思決定を支援するアプリケーションです
      </h2>
      <p className="text-lg font-semibold text-blue-500 mt-14">
        Give it a try!
      </p>
      <Button onClick={onStartClick}>Get Started</Button>
    </CenteredBox>
  );
};

export default TopPage;
