import { Col, Input } from 'reactstrap'
import { InlineSwitches } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import { inlineSwitchData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const InlineSwitch = () => {
  return (
    <Col md="12" xl="4">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{InlineSwitches}</H6>
        <div className="form-check-size">
          <div className="form-check form-switch form-check-inline">
            <Input className="check-size" id="flexSwitchCheckDefault2" type="checkbox" defaultChecked />
          </div>
          {inlineSwitchData.map(({ id, disabled }, index) => (
            <div className="form-check form-switch form-check-inline" key={index}>
              <Input className="check-size" id={id} type="checkbox" disabled={disabled} />
            </div>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default InlineSwitch