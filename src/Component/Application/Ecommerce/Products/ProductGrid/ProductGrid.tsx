import { useState } from 'react'
import { useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { Card, Row } from 'reactstrap';
import { Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import HoverButtons from './HoverButtons';
import ProductDetails from './ProductDetails';
import ProductModal from './ProductModal';
import { ProductItemInterface } from '../../../../../Types/Application/Ecommerce/Product';
import { getVisibleProducts } from '../../../../../Service/Ecommerce.service';

const ProductGrid = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const { listView, colClass } = useAppSelector((state) => state.filterData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataId, setDataId] = useState<undefined | number>();
  const { filter } = useAppSelector((state) => state.filterData);
  const products = getVisibleProducts(productItem, filter);
  return (
    <div className={`product-wrapper-grid ${listView ? "list-view" : ""}`}>
      <Row>
        {products &&
          products.map((item: ProductItemInterface, index: number) => {
            return (
              <div id="gridId" className={`${colClass} ${listView ? "col-xl-12" : ""}`} key={index}>
                <Card>
                  <div className="product-box">
                    <div className="product-img">
                      {item.status !== "none" && <div className={`ribbon-index ${item.ribbonClassName}`}>{item.status}</div>}
                      <Image className="img-fluid" src={dynamicImage(`ecommerce/${item.image}`)} alt="product" />
                      <HoverButtons setDataId=  {setDataId} setOpenModal={setOpenModal} item={item} />
                    </div>
                    <ProductDetails item={item} />
                  </div>
                </Card>
              </div>
            );
          })}
        {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataId={dataId} />}
      </Row>
    </div>
  )
}

export default ProductGrid