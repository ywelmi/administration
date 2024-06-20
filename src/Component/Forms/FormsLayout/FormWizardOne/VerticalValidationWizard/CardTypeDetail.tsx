import { Col, FormGroup, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { SelectPaymentMethod } from '../../../../../utils/Constant'
import { paymentModeName } from '../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne';

const CardTypeDetail  = () => {
  return (
    <Col xxl="6">
      <FormGroup>
        <div className="card-wrapper border rounded-3 checkbox-checked">
          <H6 className="sub-title">{SelectPaymentMethod}</H6>
          <div className="radio-form">
            {paymentModeName.map((data, index) => (
              <FormGroup check key={index}>
                <Input id={`flexRadioDefault${index}`} type="radio" name="paymentMethod" value="visa" />
                <Label className="form-check-label" for={`flexRadioDefault${index}`} check>{data}</Label>
              </FormGroup>
            ))}
          </div>
        </div>
      </FormGroup>
    </Col>
  )
}

export default CardTypeDetail