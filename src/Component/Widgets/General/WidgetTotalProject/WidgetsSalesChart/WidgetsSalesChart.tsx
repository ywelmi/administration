import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { SalesChartHeading } from "../../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { salesChartData } from "../../../../../Data/Dashboard/DashboardChart";

const WidgetsSalesChart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={SalesChartHeading} mainTitle={"Today"} firstItem="Last Month" secondItem="Last Week" thirdItem="Last Day" />
        <CardBody className="p-0">
          <div className="sales-wrapper">
            <ReactApexChart options={salesChartData} series={salesChartData.series} height={280} type="area" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WidgetsSalesChart;
