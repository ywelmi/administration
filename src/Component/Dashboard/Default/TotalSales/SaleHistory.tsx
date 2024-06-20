import { Card, CardBody, Col } from "reactstrap";
import SaleHistoryBody from "./SaleHistoryBody";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { SaleHistoryHeading, ViewAll } from "../../../../utils/Constant";

const SaleHistory = () => {
  return (
    <Col xl="7" sm="6">
      <Card className="height-equal">
        <CardHeaderCommon title={SaleHistoryHeading} subTitle={ViewAll} headClass="pb-0" borderClass={false} />
        <CardBody>
          <SaleHistoryBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SaleHistory;
