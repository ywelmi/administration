import { useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { Col } from 'reactstrap';
import { PlaceOrder, Products, Subtotal, Total } from '../../../../../utils/Constant';
import { H4, LI, UL } from '../../../../../AbstractElements';
import { getallCardTotal } from '../../../../../Service/Ecommerce.service';
import { Link } from 'react-router-dom';
import CheckoutShipping from './CheckoutShipping';
import CheckPayment from './CheckPayment';

const ProductCheckout = () => {
    const { cart } = useAppSelector((state) => state.cartData);
    return (
      <Col xl="6" sm="12">
        <div className="checkout-details">
          <div className="order-box">
            <div className="title-box">
              <div className="checkbox-title">
                <H4>{Products} </H4>
                <span>{Total}</span>
              </div>
            </div>
            <UL className="qty simple-list">
              {cart.map((data,i) => (
                <LI key={i}>
                  {data.name} × {data.total} <span>${data.price*data.total}</span>
                </LI>
              ))}
            </UL>
            <UL className="sub-total simple-list">
              <LI>
                {Subtotal} <span className="count">${getallCardTotal(cart)}</span>
              </LI>
              <CheckoutShipping />
            </UL>
            <UL className="sub-total total simple-list">
              <LI>
                {Total} <span className="count">${getallCardTotal(cart)}</span>
              </LI>
            </UL>
            <CheckPayment />
            <div className="order-place">
              <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/ecommerce/invoice/invoice1`} >
                {PlaceOrder}
              </Link>
            </div>
          </div>
        </div>
      </Col>
    );
}

export default ProductCheckout