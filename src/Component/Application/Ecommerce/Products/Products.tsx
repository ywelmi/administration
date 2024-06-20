import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { Container } from 'reactstrap';
import ProductFeatures from './ProductFeatures/ProductFeatures';
import ProductGrid from './ProductGrid/ProductGrid';
import { productsData } from '../../../../Data/Application/Ecommerce/Product';
import { setProductItem } from '../../../../ReduxToolkit/Reducer/ProductSlice';
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Ecommerce, Product } from '../../../../utils/Constant';

const ProductsContainer = () => {
  const { sideBarOn } = useAppSelector((state) => state.filterData);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(setProductItem(productsData));
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={Product} parent={Ecommerce} />
      <Container fluid className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}>
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </>
  )
}

export default ProductsContainer