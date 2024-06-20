import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { ProjectStatisticsHeading } from "../../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { projectStatisticsChartData } from "../../../../../Data/Dashboard/Ecommerce/EcommerceChartData";

const ProjectStatistics = () => {
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={ProjectStatisticsHeading} mainTitle="This Week" firstItem="This Day" secondItem="This Month" thirdItem="This year" />
        <CardBody className="pt-0">
          <div className="statistics">
            <ReactApexChart options={projectStatisticsChartData} series={projectStatisticsChartData.series} type="bar" height={412} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectStatistics;
