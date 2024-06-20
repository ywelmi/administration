import { Col, Input, Label } from 'reactstrap'
import { BorderedRadios, KohoTheme } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import { borderedRadioData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const BorderedRadio = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{BorderedRadios}</H6>
        <div className="form-check radio radio-secondary">
          <Input id="radio22" type="radio"  name="radio1" defaultChecked />
          <Label for='radio22' check>{KohoTheme}</Label>
        </div>
        {borderedRadioData.map(({ color, text,id }, index) => (
          <div className={`form-check radio radio-${color}`} key={index}>
            <Input id={id} type="radio" name="radio1" />
            <Label for={id} check>{text}</Label>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default BorderedRadio