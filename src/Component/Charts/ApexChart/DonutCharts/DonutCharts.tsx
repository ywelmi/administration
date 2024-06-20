import { Card, CardBody, Col } from 'reactstrap'
import { DonutChart } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { dountChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const DonutCharts = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={DonutChart} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={dountChartData} series={dountChartData.series} type="pie" height={300} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DonutCharts