import { Card, CardBody, Col } from 'reactstrap'
import { AreaChartOne } from '../../../../utils/Constant'
import Chart from 'react-google-charts'
import { areaChartOneData, areaChartOneDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const AreaChart1 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={AreaChartOne} borderClass={true} />
        <CardBody className="p-0 chart-block">
          <div className="chart-overflow">
            <Chart chartType="AreaChart" width="100%" height="400px" data={areaChartOneData} options={areaChartOneDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default AreaChart1