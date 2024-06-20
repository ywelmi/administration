import { durationData } from '../../../../../Data/Miscellaneous/Learning/Learning'
import { DurationLearning } from '../../../../../utils/Constant'
import { Input, Label } from 'reactstrap'

const DurationCheckBox = () => {
  return (
    <div className="checkbox-animated">
      <div className="learning-header">
        <span className="f-w-600">{DurationLearning}</span>
      </div>
      {durationData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`Duration-${index}`} check>
          <Input className="checkbox_animated" id={`Duration-${index}`} type="checkbox" />{data}
        </Label>
      ))}
    </div>
  )
}

export default DurationCheckBox