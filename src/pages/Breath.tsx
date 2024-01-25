import React from "react";
import { ConsentPage } from "../components/consent";
import { useNavigate } from "react-router-dom";
import { CenteredBox } from "../components/CenteredBox";

export const Breath: React.FC = () => {
  const navigate = useNavigate();
  const handleAgree = () => {
    console.log("同意しました。");
    navigate("/heart");
  };

  const handleBack = () => {
    console.log("戻ります。");
    navigate("/");
  };

  return (
    <CenteredBox>
      <div>
        <ConsentPage
          title="重症時(呼吸機能低下時)"
          description="あああ"
          onAgree={handleAgree}
          onBack={handleBack}
        />
      </div>
    </CenteredBox>
  );
};
