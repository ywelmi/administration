import { LI, UL } from '../../../../AbstractElements'
import { useAppDispatch } from '../../../../ReduxToolkit/Hooks'
import { setLayout } from '../../../../ReduxToolkit/Reducer/ThemeCustomizerSlice'
import CommonUL from '../CommonUL'

const Vertical = () => {
  const dispatch= useAppDispatch()
  const handleLayout = (layoutName: string) => {
    localStorage.setItem("layout",layoutName)
    dispatch(setLayout(layoutName))
  }
  return (
    <LI data-attr="normal-sidebar" className={`border-0 ${localStorage.getItem("layout") === "horizontal-wrapper" ? "active" : ""}`} onClick={() => handleLayout("horizontal-wrapper")} >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <UL className="simple-list">
          <LI className="bg-dark sidebar"></LI>
          <LI className="bg-light body"></LI>
        </UL>
      </div>
    </LI>
  )
}

export default Vertical