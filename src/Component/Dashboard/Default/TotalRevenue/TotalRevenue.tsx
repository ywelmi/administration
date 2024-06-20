import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import { FeatherIcons, H3 } from "../../../../AbstractElements";
import { totalRevenueData } from "../../../../Data/Dashboard/Default";
import { ViewReport } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";

const TotalRevenue = () => {
  return (
    <Col xl="3" md="6" className="box-col-5 total-revenue-total-order">
      <Row>
        {totalRevenueData.map((data,i)=>(
          <Col xl="12" key={i}>
            <Card>
              <CardBody>
                <div className="total-revenue mb-2">
                  <span>{data.title}</span>
                  <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>{ViewReport}</Link>
                </div>
                <H3 className="f-w-600">{data.amount}</H3>
                <div className="total-chart">
                  <div className="data-grow d-flex gap-2">
                    <FeatherIcons className="font-primary" iconName={data.icon} />
                    <span className="f-w-500">{data.result}</span>
                  </div>
                  <div className={data.chartClass}>
                    <ReactApexChart options={data.chartOptions} series={data.chartOptions.series} type={data.chartType} height={120} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default TotalRevenue;
