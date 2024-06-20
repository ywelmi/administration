import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { CashOnDeliveryHeading } from '../../../../../utils/Constant'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { PaymentMethodOptionPropsType } from '../../../../../Types/Forms/FormsLayout/FormWizardOne'

const CashOnDelivery :React.FC<PaymentMethodOptionPropsType> = ({paymentMethodName,getUserData,}) => {
  return (
    <Col xs="12">
      <div className="card-wrapper border rounded-3 light-card">
        <div>
          <FormGroup check className="radio radio-primary">
            <Input id="shipping-choose7" type="radio" name="paymentMethodName" value="cashOnDelivery" checked={paymentMethodName === "cashOnDelivery"} onChange={getUserData}/>
            <Label className="form-check-label mb-0 f-w-500">{CashOnDeliveryHeading}</Label>
          </FormGroup>
          <P>After your order is delivered, make a cash payment</P>
        </div>
        <div>
          <Image src={dynamicImage(`forms/delivery.png`)} alt="delivery"/>
        </div>
      </div>
    </Col>
  )
}

export default CashOnDelivery