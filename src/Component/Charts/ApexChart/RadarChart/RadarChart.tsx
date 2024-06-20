import { Card, CardBody, Col } from 'reactstrap'
import { RadarCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { radarChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const RadarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={RadarCharts} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={radarChartData} series={radarChartData.series} type="radar" height={300} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadarChart