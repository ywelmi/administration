import { LI, UL } from '../../../../AbstractElements'
import { useAppDispatch } from '../../../../ReduxToolkit/Hooks'
import { setLayout } from '../../../../ReduxToolkit/Reducer/ThemeCustomizerSlice'
import CommonUL from '../CommonUL'

const Horizontal = () => {
  const dispatch= useAppDispatch()
  const handleLayout = (layoutName: string) => {
    localStorage.setItem("layout",layoutName)
    dispatch(setLayout(layoutName))
  }
  return (
    <LI className={`border-0 ${localStorage.getItem("layout") === "compact-wrapper" ? "active" : ""}`} onClick={() => handleLayout("compact-wrapper")} >
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <UL className="flex-row">
          <LI className="bg-dark sidebar compact"></LI>
          <LI className="bg-light body"></LI>
        </UL>
      </div>
    </LI>
  )
}

export default Horizontal