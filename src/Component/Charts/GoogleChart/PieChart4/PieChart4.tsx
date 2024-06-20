import Chart from 'react-google-charts'
import { Card, CardBody, Col } from 'reactstrap'
import { PieChartFour } from '../../../../utils/Constant'
import { pieChartForthData, pieChartForthDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const PieChart4 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={PieChartFour} borderClass={true}/>
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="PieChart" width="100%" height="300px" data={pieChartForthData} options={pieChartForthDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PieChart4