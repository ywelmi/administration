import Chart from 'react-google-charts'
import { Card, CardBody, Col } from 'reactstrap'
import { WordTreeChart } from '../../../../utils/Constant'
import { wordTreeChartData, wordTreeChartDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const WordTree = () => {
  return (
    <Col sm="12" xl="6" className="box-col-12">
      <Card>
        <CardHeaderCommon title={WordTreeChart} borderClass={true}/>
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="WordTree" width="100%" height="400px" data={wordTreeChartData} options={wordTreeChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default WordTree