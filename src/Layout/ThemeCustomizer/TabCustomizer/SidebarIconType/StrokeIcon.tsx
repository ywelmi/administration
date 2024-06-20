import { Badges, LI } from "../../../../AbstractElements"
import { SidebarIconProp } from "../../../../Types/Layout/ThemeCustomizerTypes"
import { Stroke } from "../../../../utils/Constant"
import CommonUL from "../CommonUL"

const StrokeIcon = ({ handleSideBarIconType, sideBarIconType }: SidebarIconProp) => {
  return (
    <LI data-attr="stroke-svg" className={`normal-sidebar border-0 ${sideBarIconType === "stroke" ? "active" : ""}`} onClick={() => handleSideBarIconType("stroke")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body bg-light">
        <Badges color="primary">{Stroke}</Badges>
      </div>
    </LI>
  )
}

export default StrokeIcon