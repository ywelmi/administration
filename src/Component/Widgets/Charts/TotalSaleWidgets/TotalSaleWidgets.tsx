import { Card, CardBody, Col, Row } from "reactstrap";
import { H4, H6 } from "../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { saleChartData } from "../../../../Data/Widgets/ChartsData";

const TotalSaleWidgets = () => {
  return (
    <Row>
      {saleChartData.map((data, index) => (
        <Col xl="4" md="12" className="box-col-12" key={index}>
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <CardBody className="pb-0 m-0">
                <Row>
                  <Col xl="9" lg="8" xs="9" className="p-0">
                    <H6 className="mb-2">{data.title}</H6>
                    <H4>{data.amount}</H4>
                    <span>{data.description}</span>
                  </Col>
                  <Col xl="3" lg="4" xs="3" className="text-end p-0">
                    <H6 className="txt-success">{data.percentage}</H6>
                  </Col>
                </Row>
              </CardBody>
              <div>
                <ReactApexChart options={data.chart} series={data.chart.series} type={data.chart.chart?.type} height={200}/>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TotalSaleWidgets;
