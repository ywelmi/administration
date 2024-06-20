import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { CartType } from '../../../../Types/Application/Ecommerce/Product';
import { Row, Table } from 'reactstrap';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { Link } from 'react-router-dom';
import { Href } from '../../../../utils/Constant';
import { XCircle } from 'react-feather';
import CartTableHead from './CartTableHead';
import CartQuantityButton from './CartQuantityButton';
import CartAction from './CartAction';
import EmptyCart from './EmptyCart';
import { removeCartData } from '../../../../ReduxToolkit/Reducer/CartSlice';

const CartData = () => {
  const dispatch = useAppDispatch();
  const { symbol } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cartData);
  const removeFromCart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <>
      {cart && cart.length > 0 ? (
        <Row>
          <div className="order-history wishlist custom-scrollbar">
            <Table bordered responsive>
              <CartTableHead />
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Image className="img-fluid img-40" src={dynamicImage(`ecommerce/${item.image}`)} alt="product" />
                    </td>
                    <td>
                      <div className="product-name">
                        <Link to={Href}>{item.name}</Link>
                      </div>
                    </td>
                    <td>{symbol}{item.price}</td>
                    <CartQuantityButton item={item} />
                    <td>
                      <Link to={Href} onClick={() => removeFromCart(item)}><XCircle /></Link>
                    </td>
                    <td>{symbol}{item.price * item.total}</td>
                  </tr>
                ))}
                <CartAction/>
              </tbody>
            </Table>
          </div>
        </Row>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}

export default CartData