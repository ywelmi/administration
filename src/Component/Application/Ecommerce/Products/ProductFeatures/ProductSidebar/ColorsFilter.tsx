import { Fragment } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../../ReduxToolkit/Hooks';
import { Colors } from '../../../../../../utils/Constant';
import { H6, LI, UL } from '../../../../../../AbstractElements';
import { getColors } from '../../../../../../Service/Ecommerce.service';
import { filterColor } from '../../../../../../ReduxToolkit/Reducer/FilterSlice';

const ColorsFilter = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const colors = getColors(productItem);

  const colorHandle = (event: { target: Element }, color: string) => {
    const elems = document.getElementsByClassName("color-selector")[0].getElementsByTagName("li");
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.remove("active");
    }
    (event.target as Element).classList.add("active");
    dispatch(filterColor(color));
  };
  return (
    <div className="product-filter slider-product">
      <H6 className="f-w-600">{Colors}</H6>
      <div className="color-selector">
        <UL className="simple-list flex-row">
          {colors.map((color, i: number) => (
            <Fragment key={i}>
              <LI className={color} title={color} onClick={(e) => colorHandle(e, color)}></LI>
            </Fragment>
          ))}
        </UL>
      </div>
    </div>
  )
}

export default ColorsFilter