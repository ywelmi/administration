import { LI, UL } from '../../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href } from '../../../../../utils/Constant'
import { useAppDispatch } from '../../../../../ReduxToolkit/Hooks'
import { setColView } from '../../../../../ReduxToolkit/Reducer/FilterSlice'
import { filterProductData } from '../../../../../Data/Application/Ecommerce/Product'

const GridOptions = () => {
  const dispatch = useAppDispatch();
  const LayoutView = (colClass: string) => dispatch(setColView(colClass));
  return (
    <div className="grid-options d-inline-block">
      <UL className="simple-list flex-row">
        {filterProductData.map((data, index) => (
          <LI key={index}>
            <Link className={`product-${data.id}-layout-view`} to={Href} onClick={() => LayoutView(data.colClass)}>
              {data.filterData.map((item, number) => (
                <span key={number} className={`line-grid line-grid-${item} bg-primary`}></span>
              ))}
            </Link>
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default GridOptions