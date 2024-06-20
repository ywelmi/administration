import { Badges, LI } from "../../../../AbstractElements"
import { SidebarIconProp } from "../../../../Types/Layout/ThemeCustomizerTypes"
import { Fill } from "../../../../utils/Constant"
import CommonUL from "../CommonUL"

const FillIcon = ({ handleSideBarIconType, sideBarIconType }: SidebarIconProp) => {
  return (
    <LI data-attr="fill-svg" className={`border-0 ${sideBarIconType === "fill" ? "active" : ""}`} onClick={() => handleSideBarIconType("fill")} >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body bg-light">
        <Badges color="primary">{Fill}</Badges>
      </div>
    </LI>
  )
}

export default FillIcon