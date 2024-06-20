import { Col, Input, Label } from 'reactstrap'
import { FilledCheckboxHeading, WarningCheckboxSolidWarning } from '../../../../../utils/Constant'
import { H6 } from '../../../../../AbstractElements'
import { fillCheckboxList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const FilledCheckbox = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{FilledCheckboxHeading}</H6>
        <div className="form-check checkbox checkbox-solid-warning">
          <Input id="solid4" type="checkbox" defaultChecked />
          <Label className="form-check-label" for='solid4' check>
            {WarningCheckboxSolidWarning}
          </Label>
        </div>
        {fillCheckboxList.map(({ id, text, color }, index) => (
          <div className={`form-check checkbox checkbox-solid-${color}`} key={index}>
            <Input id={`solid-${id}`} type="checkbox" />
            <Label for={`solid-${id}`} className="form-check-label" check>
              {text}
            </Label>
          </div>
        ))}
      </div>
    </Col>
  )
}

export default FilledCheckbox