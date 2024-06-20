import { Link } from "react-router-dom";
import { Btn, LI, UL } from "../../../../../AbstractElements";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { Href } from "../../../../../utils/Constant";
import {HoverButtonsProp, ProductItemInterface} from "../../../../../Types/Application/Ecommerce/Product";
import { addToCartData } from "../../../../../ReduxToolkit/Reducer/CartSlice";

const HoverButtons = ({ item, setDataId, setOpenModal }: HoverButtonsProp) => {
  const dispatch = useAppDispatch();

  const AddToCarts = (item: ProductItemInterface, quantity: number) => {
    dispatch(addToCartData({ item, quantity }));
  };

  const onClickHandle = (i: ProductItemInterface) => {
    setOpenModal(true);
    setDataId(i.id);
  };
  return (
    <div className="product-hover">
      <UL className="simple-list flex-row">
        <LI>
          <Link
            onClick={() => AddToCarts(item, 1)}
            to={`${process.env.PUBLIC_URL}/ecommerce/cart`}
          >
            <i className="icon-shopping-cart"></i>
          </Link>
        </LI>
        <LI>
          <Link onClick={() => onClickHandle(item)} to={Href}>
            <i className="icon-eye"></i>
          </Link>
        </LI>
      </UL>
    </div> 
  );
};

export default HoverButtons;
