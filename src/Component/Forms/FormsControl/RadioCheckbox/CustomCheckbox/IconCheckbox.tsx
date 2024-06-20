import { Col, Input, Label } from 'reactstrap'
import { IconCheckboxHeading } from '../../../../../utils/Constant'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { customCheckboxList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const IconCheckbox = () => {
  return (
    <Col xl="4" sm="12" className="order-xl-0 order-sm-1">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{IconCheckboxHeading}</H6>
        <div className="form-check checkbox checkbox-primary ps-0 main-icon-checkbox">
          <UL className="checkbox-wrapper simple-list flex-row">
            <LI className="p-1 pt-2 pb-2">
              <Input className="form-check-input checkbox-shadow" id="checkbox-icon" type="checkbox" />
              <Label check>
                <i className="fa fa-sliders" /><span>Sliders</span>
              </Label>
            </LI>
            {customCheckboxList.map(({ icon, id, text, defaultChecked }, index) => (
              <LI className="p-1 pt-2 pb-2" key={index}>
                <Input className="checkbox-shadow" id={`checkbox-icon-${id}`} type="checkbox" defaultChecked={defaultChecked} />
                <Label check>
                  <i className={`fa fa-${icon}`}></i>
                  <span>{text}</span>
                </Label>
              </LI>
            ))}
          </UL>
        </div>
      </div>
    </Col>
  )
}

export default IconCheckbox