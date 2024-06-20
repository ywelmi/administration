import { Card, CardHeader, Col } from "reactstrap";
import { LatestOrdersHeading } from "../../../../utils/Constant";
import { H4 } from "../../../../AbstractElements";
import CardHeaderDropdown from "../../../../CommonElements/CommonCardHeader/CardHeaderDropdown";
import LatestOrdersTable from "./LatestOrdersTable";

const LatestOrders = () => {
  return (
    <Col xxl="6" md="12" className="box-col-12">
      <Card className="height-equal">
        <CardHeader className="total-revenue card-no-border">
          <H4>{LatestOrdersHeading}</H4>
          <div className="d-flex align-items-center gap-2">
            <span className="update-data d-none d-md-block f-light">
              Data updates in every 3 hours
            </span>
            <CardHeaderDropdown mainTitle="Today" firstItem="Last Month" secondItem="Last Week" thirdItem="Last Day" />
          </div>
        </CardHeader>
        <LatestOrdersTable />
      </Card>
    </Col>
  );
};

export default LatestOrders;
