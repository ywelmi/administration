import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { H4, LI, SVG, UL } from "../../../../AbstractElements";
import { Href, UserVisitsByDayHeading } from "../../../../utils/Constant";
import { userVisitsByDayData } from "../../../../Data/Dashboard/OnlineCourse";
import ReactApexChart from "react-apexcharts";
import { visitsChartData } from "../../../../Data/Dashboard/DashboardChart";
import { Link } from "react-router-dom";

const UserVisitsByDay = () => {
  return (
    <Col xxl="4" xl="6" className="box-col-6">
      <Card>
        <CardHeader className="card-no-border total-revenue pb-0">
          <H4>{UserVisitsByDayHeading} </H4>
          <div className="sales-chart-dropdown">
            <UL className="balance-data flex-row">
              {userVisitsByDayData.map((data, i) => (
                <LI key={i}>
                  <span className={`circle bg-${data.color}`} />
                  <span className="f-light ms-1">{data.title} </span>
                </LI>
              ))}
            </UL>
          </div>
        </CardHeader>
        <CardBody className="pt-0 pb-0">
          <div className="user-visitsCharts">
            <ReactApexChart options={visitsChartData} series={visitsChartData.series} type="bar" height={325} />
          </div>
        </CardBody>
        <CardFooter>
          <div className="common-space">
            <div>
              <Link className="f-w-600 f-14" to={Href}>
                Most Visited Day
              </Link>
              <span className="f-light f-w-500 f-14 d-block">
                Total 59.6k visits on Sunday
              </span>
            </div>
            <div className="visited-dropdown">
              <SVG className="mb-0" iconId="arrow-down" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default UserVisitsByDay;