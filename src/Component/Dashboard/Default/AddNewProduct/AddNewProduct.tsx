import { Card, CardBody, Col } from "reactstrap";
import { addNewProductData } from "../../../../Data/Dashboard/Default";
import { H6, SVG } from "../../../../AbstractElements";

const AddNewProduct = () => {
  return (
    <Col xxl="3" md="6" className="box-col-6">
      <Card>
        <div className="ecommerce-banner"></div>
      </Card>
      {addNewProductData.map((data,i)=>(
        <Col xl="12" key={i}>
          <Card className="product-widget">
            <CardBody className="new-product">
              <div className="product-cost">
                <div className="add-product">
                  <div className={`product-icon bg-light-${data.color}`}>
                    <SVG iconId={data.icon} />
                  </div>
                  <div>
                    <H6 className="mb-1">{data.title}</H6>
                    <span className="f-light">{data.subTitle}</span>
                  </div>
                </div>
                <div className="product-icon">
                  <SVG iconId="arrow-down" />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Col>
  );
};

export default AddNewProduct;
