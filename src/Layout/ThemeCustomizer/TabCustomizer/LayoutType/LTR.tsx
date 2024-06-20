import { Badges, LI, UL } from '../../../../AbstractElements';
import { LtrDataType } from '../../../../Types/Layout/ThemeCustomizerTypes';
import { LTRBadges } from '../../../../utils/Constant';
import CommonUL from '../CommonUL';

const LTR = ({ handleLayout, layout_type }: LtrDataType) => {
  return (
    <LI
      className={`${layout_type === "ltr" ? "active" : ""}`}
      onClick={() => {
        handleLayout("ltr");
      }}
    >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <UL className="simle-list flex-row">
          <LI className="bg-light sidebar"></LI>
          <LI className="bg-light body">
            <Badges color="primary">{LTRBadges}</Badges>
          </LI>
        </UL>
      </div>
    </LI>
  )
}

export default LTR