import React from "react";
import { ConsentPage } from "../components/consent";
import { useNavigate } from "react-router-dom";
import { CenteredBox } from "../components/CenteredBox";

export const Heart: React.FC = () => {
  const navigate = useNavigate();
  const handleAgree = () => {
    console.log("同意しました。");
    navigate("/");
  };

  const handleBack = () => {
    console.log("戻ります。");
    navigate("/breath");
  };

  return (
    <CenteredBox>
      <div>
        <ConsentPage
          title="急変時(心肺機能停止状態、停止しそうな状態)"
          description="あああ"
          onAgree={handleAgree}
          onBack={handleBack}
        />
      </div>
    </CenteredBox>
  );
};
