import { Col, Input, Label } from 'reactstrap'
import { FilledRadios, ProductRadio } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import { fillRadioList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const FilledRadio = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 fill-radios h-100 checkbox-checked">
        <H6 className="sub-title">{FilledRadios}</H6>
        <div className="form-check radio radio-primary">
          <Input id="radio111" type="radio" name="radio3" defaultChecked />
          <Label for='radio111' className="form-check-label" check>
            {ProductRadio}
          </Label>
        </div>
        {fillRadioList.map(({ id, text, color }, index) => (
          <div className={`form-check radio radio-${color}`} key={index}>
            <Input id={`radios-${id}`} type="radio" name="radio3" />
            <Label for={`radios-${id}`} className="form-check-label" check>
              {text}
            </Label>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default FilledRadio