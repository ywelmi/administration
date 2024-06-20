import { Card, CardBody, Col } from 'reactstrap'
import { RadialBarCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { circleChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const RadialBarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={RadialBarCharts} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={circleChartData} series={circleChartData.series} type="radialBar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadialBarChart