import React from "react";

type Props = {
  children: React.ReactNode;
};

export const CenteredBox: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-40 mx-auto ">
      {children}
    </div>
  );
};
