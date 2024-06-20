import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { BasicRadioAndCheckboxMaps, BasicRadioAndCheckboxSimpleRadios } from '../../../../../utils/Constant'
import { basicRadioDataList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const SimpleRadio = () => {
  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{BasicRadioAndCheckboxSimpleRadios}</H6>
        <div className="form-check-size">
          <div className="form-check form-check-inline radio radio-primary">
            <Input id="radioinline1" type="radio" name="radio5" defaultChecked />
            <Label className="mb-0" for='radioinline1' check>
              {BasicRadioAndCheckboxMaps}
            </Label>
          </div>
          {basicRadioDataList.map(({ id, text }, index) => (
            <div className="form-check form-check-inline radio radio-primary" key={index}>
              <Input id={id} type="radio" name="radio5" defaultChecked />
              <Label className="mb-0" for={id} check>
                {text}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default SimpleRadio