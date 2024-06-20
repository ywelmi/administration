import { Card, CardBody, Col } from "reactstrap";
import { ColumnChartOne } from "../../../../utils/Constant";
import Chart from 'react-google-charts'
import { columnChartData, columnChartDataOption } from "../../../../Data/Charts/GoogleChart/GoogleChartData";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const ColumnChart1 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={ColumnChartOne} borderClass={true}/>
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={columnChartData}
              options={columnChartDataOption}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColumnChart1;
