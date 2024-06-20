import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { CheckedCheckbox, DefaultCheck, DefaultCheckBox } from '../../../../../utils/Constant'

const DefaultChecks = () => {
  return (
    <Col sm="6" xl="4">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{DefaultCheck}</H6>
        <div className="form-check">
          <Input id="flexCheckDefault" type="checkbox" />
          <Label for='flexCheckDefault' check>{DefaultCheckBox}</Label>
        </div>
        <div className="form-check">
          <Input id="flexCheckChecked" type="checkbox" defaultChecked />
          <Label for='flexCheckChecked' check>{CheckedCheckbox}</Label>
        </div>
      </div>
    </Col>
  )
}

export default DefaultChecks