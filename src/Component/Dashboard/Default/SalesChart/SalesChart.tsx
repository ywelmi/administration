import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { SalesChartHeading } from "../../../../utils/Constant";
import SalesChartDropdown from "./SalesChartDropdown";
import ReactApexChart from "react-apexcharts";
import { salesChartData } from "../../../../Data/Dashboard/DashboardChart";

const SalesChart = () => {
  return (
    <Col xl="6" className="box-col-7">
      <Card>
        <CardHeader className="sales-chart card-no-border pb-0">
          <H4>{SalesChartHeading} </H4>
          <SalesChartDropdown />
        </CardHeader>
        <CardBody className="p-2 pt-0">
          <div className="sales-wrapper">
            <ReactApexChart options={salesChartData} series={salesChartData.series} height={280} type="area" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesChart;
