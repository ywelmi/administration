import { Card, CardBody, Col } from 'reactstrap'
import Chart from 'react-google-charts'
import { ColumnChartTwo } from '../../../../utils/Constant'
import { columnCartTwoData, columnCartTwoDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const ColumnChart2 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={ColumnChartTwo} borderClass={true} />
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="Bar" width="100%" height="400px" data={columnCartTwoData} options={columnCartTwoDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ColumnChart2