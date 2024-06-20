import { progressNumberList } from '../../../../Data/Ui-Kits/Progress/Progress'
import { Btn } from '../../../../AbstractElements'

const DynamicProgressWithNumberSteps = () => {
  return (
    <>
      {progressNumberList.map(({ color, number, className }, index) => (
        <Btn size="sm" color={color} className={`position-absolute top-0 p-0 ${className} translate-middle rounded-circle`} style={{width: "2rem",height: "2rem",}}key={index}>
          {number}
        </Btn>
      ))}
    </>
  )
}

export default DynamicProgressWithNumberSteps