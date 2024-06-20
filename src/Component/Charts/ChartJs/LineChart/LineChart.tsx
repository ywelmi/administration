import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from 'reactstrap'
import { ChatJSLineChart } from '../../../../utils/Constant'
import { lineChartData, lineChartDataOption } from "../../../../Data/Charts/ChartJs/ChartJs";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const LineChart = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CardHeaderCommon title={ChatJSLineChart} borderClass={true}/>
        <CardBody className="chart-block">
          <Line data={lineChartData} options={lineChartDataOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default LineChart