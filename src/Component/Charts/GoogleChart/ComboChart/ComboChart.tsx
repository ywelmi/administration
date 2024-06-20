import Chart from 'react-google-charts'
import { Card, CardBody, Col } from 'reactstrap'
import { ComboCharts } from '../../../../utils/Constant'
import { comboChartData, comboChartDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const ComboChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CardHeaderCommon title={ComboCharts} borderClass={true} />
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="ComboChart" width="100%" height="500px" data={comboChartData} options={comboChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ComboChart