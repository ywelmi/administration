import Chart from 'react-google-charts'
import { Card, CardBody, Col } from 'reactstrap'
import { PieChartTwo } from '../../../../utils/Constant'
import { pieChartTwoData, pieChartTwoDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const PieChart2 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={PieChartTwo} borderClass={true} />
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="PieChart" width="100%" height="300px" data={pieChartTwoData} options={pieChartTwoDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PieChart2