import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { RevenueGrowthHeading } from "../../../../utils/Constant";
import BalanceData from "./BalanceData";
import CardHeaderDropdown from "../../../../CommonElements/CommonCardHeader/CardHeaderDropdown";
import RevenueGrowthChart from "./RevenueGrowthChart";
import RevenueGrowthDetails from "./RevenueGrowthDetails";

const RevenueGrowth = () => {
  return (
    <Col xl="8" md="12" className="box-col-12">
      <Card>
        <CardHeader className="sales-chart card-no-border">
          <H4>{RevenueGrowthHeading}</H4>
          <div className="sales-chart-dropdown">
            <BalanceData />
            <CardHeaderDropdown mainTitle="This Year" firstItem="Last Month" secondItem="Last Week" thirdItem="Today"/>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <Row>
            <RevenueGrowthChart />
            <RevenueGrowthDetails />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RevenueGrowth;
