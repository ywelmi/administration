import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { LiveProductHeading, ViewAll } from "../../../../utils/Constant";
import LiveProductTable from "./LiveProductTable";

const LiveProduct = () => {
  return (
    <Col xxl="6" className="box-col-12">
      <Card>
        <CardHeaderCommon title={LiveProductHeading} subTitle={ViewAll} />
        <CardBody className="pt-0">
          <LiveProductTable />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveProduct;
