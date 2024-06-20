import { Card, CardBody, Col } from 'reactstrap'
import { SteplineCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { stepLineChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const SteplineChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={SteplineCharts} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={stepLineChartData} series={stepLineChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SteplineChart