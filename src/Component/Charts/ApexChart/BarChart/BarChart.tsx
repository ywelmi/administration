import { Card, CardBody, Col } from 'reactstrap'
import { BarCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { barChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const BarChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={BarCharts} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={barChartData} series={barChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BarChart