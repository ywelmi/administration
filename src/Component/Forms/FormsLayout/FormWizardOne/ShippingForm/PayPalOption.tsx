import { Col, FormGroup, Input, Label } from 'reactstrap'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { PaymentMethodOptionPropsType } from '../../../../../Types/Forms/FormsLayout/FormWizardOne'
import { Paypal } from '../../../../../utils/Constant'

const PayPalOption:React.FC<PaymentMethodOptionPropsType> = ({paymentMethodName,getUserData,}) => {
  return (
    <Col xs="12">
      <div className="card-wrapper border rounded-3 light-card">
        <div>
          <FormGroup check className="radio radio-primary">
            <Input id="shipping-choose5" type="radio" name="paymentMethodName" value="Paypal" checked={paymentMethodName === "Paypal"} onChange={getUserData}/>
            <Label className="form-check-label mb-0 f-w-500" for="shipping-choose5">{Paypal}</Label>
          </FormGroup>
          <P>You will be taken to the paypal website to finish your transaction safely</P>
        </div>
        <div>
          <Image src={dynamicImage(`checkout/paypal.png`)} alt="paypal"/>
        </div>
      </div>
    </Col>
  )
}

export default PayPalOption