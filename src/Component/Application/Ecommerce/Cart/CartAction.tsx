import { useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { Input, InputGroup } from 'reactstrap';
import { Btn, H6 } from '../../../../AbstractElements';
import { Apply, Checkout, ContinueShopping , EnterCouponCode, TotalPrice } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';
import { getallCardTotal } from '../../../../Service/Ecommerce.service';

const CartAction = () => {
    const { cart } = useAppSelector((state) => state.cartData);
    const { symbol } = useAppSelector((state) => state.product);
    return (
      <>
        <tr>
          <td colSpan={4}>
            <InputGroup>
              <Input type="text" placeholder={EnterCouponCode}/>
              <Btn tag="a" color="primary" className="text-white">{Apply}</Btn>
            </InputGroup>
          </td>
          <td className="total-amount">
            <H6 className= "m-0 text-end" >
              <span className="f-w-600">{TotalPrice} :</span>
            </H6>
          </td>
          <td><span>{symbol}{getallCardTotal(cart)}</span></td>
        </tr>
        <tr>
          <td className="text-end" colSpan={5}>
            <Link to={`${process.env.PUBLIC_URL}/ecommerce/products`} className="btn btn-secondary cart-btn-transform">{ContinueShopping}</Link>
          </td>
          <td>
            <Link className="btn btn-success cart-btn-transform" to={`${process.env.PUBLIC_URL}/ecommerce/checkout`}>{Checkout}</Link>
          </td>
        </tr>
      </>
    )
}

export default CartAction