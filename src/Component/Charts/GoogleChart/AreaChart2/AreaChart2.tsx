import { Card, CardBody, Col } from 'reactstrap'
import { AreaChartTwo } from '../../../../utils/Constant'
import Chart from 'react-google-charts'
import { areaChartTwoData, areaChartTwoDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const AreaChart2 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={AreaChartTwo} borderClass={true} />
        <CardBody className="p-0 chart-block">
          <div className="chart-overflow">
            <Chart chartType="AreaChart" width="100%" height="400px" data={areaChartTwoData} options={areaChartTwoDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default AreaChart2