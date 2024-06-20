import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { BasicRadioAndCheckboxBlog, SimpleCheckboxHeading } from '../../../../../utils/Constant'
import { basicRadioCheckboxDataList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const SimpleCheckbox = () => {
  return (
    <Col md="12">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{SimpleCheckboxHeading}</H6>
        <div className="form-check-size">
          <div className="form-check form-check-inline checkbox checkbox-dark mb-0">
            <Input id="inline-1" type="checkbox" />
            <Label check for='inline-1'>
              {BasicRadioAndCheckboxBlog}
            </Label>
          </div>
          {basicRadioCheckboxDataList.map(({ id, text, defaultChecked }, index) => (
            <div className="form-check form-check-inline checkbox checkbox-dark mb-0" key={index}>
              <Input id={id} type="checkbox" defaultChecked={defaultChecked} />
              <Label check for={id}>
                {text}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default SimpleCheckbox