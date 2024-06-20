import { Col, Input, Label, Row } from 'reactstrap'
import { CashOnDelivery, CheckPayments, Paypal } from '../../../../../utils/Constant'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'

const CheckPayment = () => {
  return (
    <div className="animate-chk">
      <Row>
        <Col>
          <Label className="d-block" for="edo-ani">
            <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />{CheckPayments}
          </Label>
          <Label className="d-block" for="edo-ani1">
            <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani"/>
            {CashOnDelivery}
          </Label>
          <Label className="d-flex align-items-center" for="edo-ani2">
            <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked/>
            {Paypal}
            <Image className="img-paypal" src={dynamicImage("checkout/paypal.png")} alt="paypal" />
          </Label>
        </Col>
      </Row>
    </div>
  )
}

export default CheckPayment