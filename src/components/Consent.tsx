import React, { useState } from "react";
import { Button } from "./Button";

export type Props = {
  title: string;
  description: string;
  onAgree: () => void;
  onBack: () => void;
};

export const ConsentPage: React.FC<Props> = ({
  title,
  description,
  onAgree,
  onBack,
}) => {
  //State
  const [isAgreed, setIsAgreed] = useState(false);

  //Event Handlers
  const handleAgree = () => {
    setIsAgreed(true);
    onAgree();
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div>
      <h2 className="text-2xl text-gray-800 mt-8">{title}</h2>
      <p className="text-lg  text-gray-800 mt-14">{description}</p>
      <div className="flex gap-8">
        {!isAgreed ? (
          <Button onClick={handleAgree}>同意する</Button>
        ) : (
          <p>同意しました</p>
        )}
        <Button onClick={handleBack}>戻る</Button>
      </div>
    </div>
  );
};
