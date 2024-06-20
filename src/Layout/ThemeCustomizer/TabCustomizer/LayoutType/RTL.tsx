import { Badges, LI, UL } from '../../../../AbstractElements'
import { LtrDataType } from '../../../../Types/Layout/ThemeCustomizerTypes'
import { RTLBadges } from '../../../../utils/Constant'
import CommonUL from '../CommonUL'

const RTL = ({ handleLayout, layout_type }: LtrDataType) => {
  return (
    <LI className={`${layout_type === "rtl" ? "active" : ""}`} onClick={() => handleLayout("rtl")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <UL className="simple-list flex-row">
          <LI className="bg-light body">
            <Badges color="primary">{RTLBadges}</Badges>
          </LI>
          <LI className="bg-light sidebar"></LI>
        </UL>
      </div>
    </LI>
  )
}

export default RTL