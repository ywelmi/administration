import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { TopRevenueProductHeading } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { totalRevenueProductChartData } from "../../../../Data/Dashboard/DashboardChart";
import SalesChartDropdown from "./SalesChartDropdown";

const TopRevenueProduct = () => {
  return (
    <Col xxl="3" md="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={TopRevenueProductHeading} mainTitle="Today" firstItem="Last Month" secondItem="Last Week" thirdItem="Last Day"/>
        <CardBody className="pt-0">
          <ReactApexChart className="revenueproduct" options={totalRevenueProductChartData} series={totalRevenueProductChartData.series} type="donut" height={240} />
          <div className="sales-chart-dropdown">
            <SalesChartDropdown />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopRevenueProduct;