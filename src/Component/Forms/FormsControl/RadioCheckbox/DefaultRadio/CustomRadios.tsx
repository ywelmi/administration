import { Col, Input, Label } from 'reactstrap'
import { CustomRadio, DefaultCheckedRadio, DefaultRadioLabel } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'

const CustomRadios = () => {
  return (
    <Col sm="6" xl="4">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{CustomRadio}</H6>
        <div className="form-check">
          <Input id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
          <Label for='flexRadioDefault1' check>
            {DefaultRadioLabel}
          </Label>
        </div>
        <div className="form-check">
          <Input id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked />
          <Label for='flexRadioDefault2' check>
            {DefaultCheckedRadio}
          </Label>
        </div>
      </div>
    </Col>
  )
}

export default CustomRadios