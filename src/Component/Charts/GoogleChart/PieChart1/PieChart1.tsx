import Chart from 'react-google-charts'
import { Card, CardBody, Col } from 'reactstrap'
import { PieChartOne } from '../../../../utils/Constant'
import { pieOneChartData, pieOneChartDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const PieChart1 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={PieChartOne} borderClass={true}/>
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="PieChart" width="100%" height="300px" data={pieOneChartData} options={pieOneChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PieChart1