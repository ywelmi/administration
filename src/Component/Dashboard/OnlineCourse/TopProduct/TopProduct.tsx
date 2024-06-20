import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { TopProductHeading } from "../../../../utils/Constant";
import { UL } from "../../../../AbstractElements";
import TopProductBody from "./TopProductBody";

const TopProduct = () => {
  return (
    <Col xxl="4" md="6" className="box-col-6">
      <Card className="height-equal">
        <CardHeaderCommon title={TopProductHeading} subTitle="View All" />
        <CardBody className="pt-0">
          <div className="top-product-card">
            <UL>
              <TopProductBody />
            </UL>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopProduct;
