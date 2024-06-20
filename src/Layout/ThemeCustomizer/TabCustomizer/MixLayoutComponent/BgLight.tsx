import { LI, UL } from '../../../../AbstractElements'
import { MixLayoutComponentProp } from '../../../../Types/Layout/ThemeCustomizerTypes'
import CommonUL from '../CommonUL'

const BgLight = ({ handleCustomizerMix_Background, mixLayout }: MixLayoutComponentProp) => {
  return (
    <LI
    className={`color-layout border-0 ${mixLayout === "dark-sidebar" ? "active" : ""}`}
    data-attr="dark-sidebar"   
    onClick={() => handleCustomizerMix_Background("dark-sidebar")}
    >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <UL className="simple-list flex-row">
          <LI className="bg-dark sidebar"></LI>
          <LI className="bg-light body"> </LI>
        </UL>
      </div>
    </LI>
  )
}

export default BgLight