import { Badges, LI, UL } from '../../../../AbstractElements'
import { LtrDataType } from '../../../../Types/Layout/ThemeCustomizerTypes'
import { Box } from '../../../../utils/Constant'
import CommonUL from '../CommonUL'

const BoxLayout = ({ handleLayout, layout_type }: LtrDataType) => {
  return (
    <LI
      className={`${layout_type === "box-layout" ? "active" : ""}`}
      data-attr="box"
      onClick={() => handleLayout("box-layout")}
    >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <UL className="simple-list flex-row">
          <LI className="bg-light sidebar"></LI>
          <LI className="bg-light body">
            <Badges color="primary">{Box}</Badges>
          </LI>
        </UL>
      </div>
    </LI>
  )
}

export default BoxLayout