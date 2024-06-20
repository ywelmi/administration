import { Fragment } from 'react'
import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { SelectYourPaymentMethods, VisaAnimated } from '../../../../../utils/Constant'
import { animatedPaymentData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const AnimatedRadio = () => {
  return (
    <Col sm="6">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{SelectYourPaymentMethods}</H6>
        <Label className="d-block" for='edo-ani' check></Label>
        <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />
        {VisaAnimated}
        {animatedPaymentData.map(({ id, text, defaultChecked }, index) => (
          <Fragment key={index}>
            <Label className="d-block" check for={id}></Label>
            <Input className="radio_animated" id={id} type="radio" name="rdo-ani" defaultChecked={defaultChecked} />{text}
          </Fragment>
        ))}
      </div>
    </Col>
  )
}

export default AnimatedRadio