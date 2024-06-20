import { MixLayoutComponentProp } from "../../../../Types/Layout/ThemeCustomizerTypes";
import { LI, UL } from "../../../../AbstractElements";
import CommonUL from "../CommonUL";

const LightOnly = ({ handleCustomizerMix_Background, mixLayout }: MixLayoutComponentProp) => {
  return (
    <LI
    className={`color-layout border-0 ${mixLayout === "light-only" ? "active" : ""}`}
    data-attr="light-only"   
    onClick={() => handleCustomizerMix_Background("light-only")}
    >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <UL className="simple-list flex-row">
          <LI className="bg-light sidebar"></LI>
          <LI className="bg-light body"> </LI>
        </UL>
      </div>
    </LI>
  );
};

export default LightOnly;
