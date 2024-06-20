import { learningFilterData } from '../../../../../Data/Miscellaneous/Learning/Learning'
import { CategoriesLearning } from '../../../../../utils/Constant'
import { Input, Label } from 'reactstrap'

const CategoriesCheckBox = () => {
  return (
    <div className="checkbox-animated">
      <div className="learning-header">
        <span className="f-w-600">{CategoriesLearning}</span>
      </div>
      {learningFilterData.map((data, index) => (
        <Label key={index} className="d-block mb-2" for={`chk-ani-${index}`}>
          <Input className="checkbox_animated" id={`chk-ani-${index}`} type="checkbox" />{data}
        </Label>
      ))}
    </div>
  )
}

export default CategoriesCheckBox