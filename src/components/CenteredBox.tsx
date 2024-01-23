import React from "react";

interface CenteredBoxProps {
  children: React.ReactNode;
}

const CenteredBox: React.FC<CenteredBoxProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-40">
      {children}
    </div>
  );
};

export default CenteredBox;
