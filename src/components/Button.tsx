import React from "react";
import { TopPage } from "../pages/Top";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="text-lg text-white bg-blue-500 hover:bg-blue-400 rounded px-4 py-2 mt-14"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
