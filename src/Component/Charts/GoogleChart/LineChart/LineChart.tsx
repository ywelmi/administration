import { Card, CardBody, Col } from 'reactstrap'
import { LineCharts } from '../../../../utils/Constant'
import Chart from 'react-google-charts'
import { lineChartData, lineChartDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const LineChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CardHeaderCommon title={LineCharts} borderClass={true} />
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="Line" width="100%" height="500px" data={lineChartData} options={lineChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LineChart