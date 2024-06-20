import { Bar } from "react-chartjs-2";
import { Card, CardBody, Col } from 'reactstrap'
import { ChartJSBarChart } from '../../../../utils/Constant'
import { chartJsBarChartData, chartJsBarChartDataOption } from "../../../../Data/Charts/ChartJs/ChartJs";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const BarChart = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CardHeaderCommon title={ChartJSBarChart} borderClass={true} />
        <CardBody className="chart-block">
            <Bar data={chartJsBarChartData} options={chartJsBarChartDataOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default BarChart