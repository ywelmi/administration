import ReactApexChart from "react-apexcharts";
import { Col } from "reactstrap";
import { revenueGrowthChart } from "../../../../Data/Dashboard/DashboardChart";

const RevenueGrowthChart = () => {
  return (
    <Col xxl="8" xl="12">
      <div className="revenuegrowth">
        <ReactApexChart className="revenuegrowth-chart" options={revenueGrowthChart} series={revenueGrowthChart.series} type="area" height={315} />
      </div>
    </Col>
  );
};

export default RevenueGrowthChart;
