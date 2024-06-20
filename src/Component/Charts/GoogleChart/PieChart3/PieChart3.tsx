import Chart from 'react-google-charts'
import { Card, CardBody, Col } from 'reactstrap'
import { PieChartThree } from '../../../../utils/Constant'
import { pieChartThreeData, pieChartThreeDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const PieChart3 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={PieChartThree} borderClass={true}/>
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="PieChart" width="100%" height="300px" data={pieChartThreeData} options={pieChartThreeDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PieChart3