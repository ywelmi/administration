import { Card, CardBody, Col } from "reactstrap";
import { UserVisitsByDay } from "../../../../../utils/Constant";
import UserVisitsDayFooter from "./UserVisitsDayFooter";
import ReactApexChart from "react-apexcharts";
import { userVisitsDayChartData } from "../../../../../Data/Widgets/WidgetsChartData";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const UserVisitsDay = () => {
  return (
    <Col xl="4" sm="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={UserVisitsByDay} />
        <CardBody className="pt-0 pb-0">
          <div className="user-visitsCharts">
            <ReactApexChart options={userVisitsDayChartData} series={userVisitsDayChartData.series} type="bar" height={325} />
          </div>
        </CardBody>
        <UserVisitsDayFooter />
      </Card>
    </Col>
  );
};

export default UserVisitsDay;
