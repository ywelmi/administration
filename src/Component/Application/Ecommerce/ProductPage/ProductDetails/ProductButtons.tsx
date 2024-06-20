import { Btn } from '../../../../../AbstractElements'
import { AddToCart, AddToWishList, BuyNow } from '../../../../../utils/Constant'

const ProductButtons = () => {
  return (
    <div className="m-t-15 btn-showcase">
      <Btn color="primary" href={`${process.env.PUBLIC_URL}/ecommerce/cart`}>
        <i className="fa fa-shopping-basket me-1" />
        {AddToCart}
      </Btn>
      <Btn color="success" href={`${process.env.PUBLIC_URL}/ecommerce/checkout`}>
        <i className="fa fa-shopping-cart me-1" />
        {BuyNow}
      </Btn>
      <Btn color="secondary" href={`${process.env.PUBLIC_URL}/ecommerce/wishlist`}>
        <i className="fa fa-heart me-1" />
        {AddToWishList}
      </Btn>
    </div>
  )
}

export default ProductButtons