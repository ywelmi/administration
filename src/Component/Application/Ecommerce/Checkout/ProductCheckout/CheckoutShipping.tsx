import { Input, Label } from 'reactstrap'
import { LI } from '../../../../../AbstractElements'
import { Shipping } from '../../../../../utils/Constant'

const CheckoutShipping = () => {
  return (
    <LI className="shipping-class">
      {Shipping}
      <div className="shopping-checkout-option">
        <Label className="d-block" for="chk-ani">
          <Input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked/>
          {'Option 1'}
        </Label>
        <Label className="d-block" for="chk-ani1">
          <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />
          {'Option 2'}
        </Label>
      </div>
    </LI>
  )
}

export default CheckoutShipping