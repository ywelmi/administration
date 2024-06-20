import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { AddProduct, Ecommerce, ProductForm } from "../../../../utils/Constant";
import { H5 } from "../../../../AbstractElements";
import ProductBody from "./ProductBody/ProductBody";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";

const AddProductContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AddProduct} parent={Ecommerce} />
      <Container fluid>
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <H5>{ProductForm}</H5>
              </CardHeader>
              <CardBody>
                <ProductBody />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProductContainer;
