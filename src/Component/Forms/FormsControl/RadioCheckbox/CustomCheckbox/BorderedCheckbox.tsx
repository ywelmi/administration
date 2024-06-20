import { Col, Input, Label } from 'reactstrap'
import { BorderedCheckboxHeading, PrimaryCheckboxPrimary } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import { borderCheckboxData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const BorderedCheckbox = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{BorderedCheckboxHeading}</H6>
        <div className="form-check checkbox checkbox-primary mb-0">
          <Input id="checkbox-primary-1" type="checkbox" defaultChecked />
          <Label for='checkbox-primary-1' check>{PrimaryCheckboxPrimary}</Label>
        </div>
        {borderCheckboxData.map(({ color, text }, index) => (
          <div className={`form-check checkbox checkbox-${color} mb-0`} key={index}>
            <Input id={`checkbox-${color}`} type="checkbox" />
            <Label for={`checkbox-${color}`} check>{text}</Label>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default BorderedCheckbox