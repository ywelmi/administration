import React from 'react'
import { Col, FormGroup, Input, Label } from 'reactstrap'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { PaymentMethodOptionPropsType } from '../../../../../Types/Forms/FormsLayout/FormWizardOne'
import { CreditCard } from '../../../../../utils/Constant'
import CreditCardForm from './CreditCardForm'

const CreditCardOption:React.FC<PaymentMethodOptionPropsType>= ({paymentMethodName,getUserData,}) => {
  return (
    <Col xs="12">
      <div className="card-wrapper border rounded-3 pay-info light-card">
        <div>
          <div>
            <FormGroup check className="radio radio-primary">
              <Input id="shipping-choose6" type="radio" name="paymentMethodName" value="creditCard" checked={paymentMethodName === "creditCard"} onChange={getUserData}/> 
              <Label className="form-check-label mb-0 f-w-500">{CreditCard}</Label>
            </FormGroup>
            <P>Transferring money securely through your bank account. Mastercard, Visa, Discover, and Stripe are all accepted</P>
          </div>
          <div>
            <Image src={dynamicImage(`forms/credit-card.png`)} alt="card"/>
          </div>
        </div>
        <CreditCardForm />
      </div>
    </Col>
  )
}

export default CreditCardOption