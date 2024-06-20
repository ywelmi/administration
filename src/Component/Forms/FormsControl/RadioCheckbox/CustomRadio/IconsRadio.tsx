import { Col, Input, Label } from 'reactstrap'
import { IconsRadios } from '../../../../../utils/Constant'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { customRadioList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const IconsRadio = () => {
  return (
    <Col xl="4" sm="12" className="order-xl-0 order-sm-1">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <H6 className="sub-title">{IconsRadios}</H6>
        <div className="form-check radio radio-primary ps-0">
          <UL className="radio-wrapper simple-list flex-row">
            <LI className="p-1 pt-2 pb-2">
              <Input id="radio-icon" type="radio" name="radio2"/>
              <Label className="form-check-label" check for='radio-icon'>
                <i className="fa fa-sliders"></i><span>Sliders</span>
              </Label>
            </LI>
            {customRadioList.map(({ icon, id, text, defaultChecked }, index) => (
              <LI className="p-1 pt-2 pb-2" key={index}>
                <Input className="checkbox-shadow" id={`radio-${id}`} type="radio" defaultChecked={defaultChecked} name="radio2" />
                <Label className="form-check-label" for={`radio-${id}`} check>
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

export default IconsRadio