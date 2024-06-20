import { Card, Col, Container, Row } from 'reactstrap'
import ImageSlider from './ImageSlider/ImageSlider'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductBrand from './ProductBrand/ProductBrand'
import ProductStatus from './ProductStatus/ProductStatus'
import ClothsDetails from './ClothsDetails/ClothsDetails'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Ecommerce, ProductPage } from '../../../../utils/Constant'

const ProductPageContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProductPage} parent={Ecommerce} />
      <Container fluid>
        <div>
          <Row className="product-page-main p-0">
            <ImageSlider />
            <ProductDetails />
            <Col xxl="3" md="6" className="box-col-6">
              <ProductBrand />
              <ProductStatus />
            </Col>
          </Row>
        </div>
        <Card>
          <Row className="product-page-main">
            <ClothsDetails />
          </Row>
        </Card>
      </Container>
    </>
  )
}

export default ProductPageContainer