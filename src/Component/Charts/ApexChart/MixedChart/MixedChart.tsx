import { Card, CardBody, Col } from 'reactstrap'
import { MixedCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { mixChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const MixedChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-12">
      <Card>
        <CardHeaderCommon title={MixedCharts} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={mixChartData} series={mixChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default MixedChart