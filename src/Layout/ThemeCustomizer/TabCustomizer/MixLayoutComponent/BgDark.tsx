import { LI, UL } from '../../../../AbstractElements'
import CommonUL from '../CommonUL'
import { MixLayoutComponentProp } from '../../../../Types/Layout/ThemeCustomizerTypes'

const BgDark = ({ handleCustomizerMix_Background, mixLayout }: MixLayoutComponentProp) => {
  return (
    <LI
      className={`color-layout border-0 ${mixLayout === "dark-only" ? "active" : ""}`}
      data-attr="dark-only"
      onClick={() => handleCustomizerMix_Background("dark-only")}
    >
      <div className="header bg-dark">
        <CommonUL />
      </div>
      <div className="body">
        <UL className="simple-list flex-row">
          <LI className="bg-dark sidebar"></LI>
          <LI className="bg-dark body"> </LI>
        </UL >
      </div>
    </LI>
  )
}

export default BgDark