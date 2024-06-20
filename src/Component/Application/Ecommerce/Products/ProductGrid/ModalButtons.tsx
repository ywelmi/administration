import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { Link, useNavigate } from "react-router-dom";
import { AddToCartHeading, ViewDetails } from "../../../../../utils/Constant";
import { addToCartData } from "../../../../../ReduxToolkit/Reducer/CartSlice";
import {
  ModalButtonsProp,
  ProductItemInterface,
} from "../../../../../Types/Application/Ecommerce/Product";

const ModalButtons = ({ singleProduct, quantity }: ModalButtonsProp) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const AddToCarts = (item: ProductItemInterface) => {
    dispatch(addToCartData({ item, quantity }));
    navigate(`/ecommerce/cart`);
  };
  return (
    <div className="addcart-btn">
      <Link
        to={`/ecommerce/cart`}
        className="btn btn-primary"
        onClick={() => AddToCarts(singleProduct)}
      >
        {AddToCartHeading}
      </Link>
      <Link to={`/ecommerce/productpage`} className="btn btn-primary ms-2">
        {ViewDetails}
      </Link>
    </div>
  );
};

export default ModalButtons;

