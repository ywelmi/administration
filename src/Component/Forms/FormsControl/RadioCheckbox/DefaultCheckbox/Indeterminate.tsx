import { Col, Input, Label } from 'reactstrap'
import { IndeterminateHeading, IndeterminateCheckbox } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'

const Indeterminate = () => {
  return (
    <Col xl="12" sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{IndeterminateHeading}</H6>
        <div className="form-check">
          <Input id="flexCheckIndeterminate" type="checkbox" />
          <Label for="flexCheckIndeterminate" check>{IndeterminateCheckbox}</Label>
        </div>
      </div>
    </Col>
  )
}

export default Indeterminate