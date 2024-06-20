import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { SkillStatusHeading } from "../../../../utils/Constant";
import { skillChart } from "../../../../Data/Widgets/WidgetsChartData";

const SkillStatus = () => {
  return (
    <Col xl="6" lg="12" className="box-col-6 xl-50">
      <Card>
        <CardHeader>
          <H4>{SkillStatusHeading}</H4>
        </CardHeader>
        <CardBody>
          <div className="chart-container skill-chart">
            <ReactApexChart options={skillChart} series={skillChart.series} type="radialBar" height={375}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SkillStatus;
