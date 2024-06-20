import { Card, CardBody, Col } from 'reactstrap'
import { BubbleCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { bubbleChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const BubbleChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-12">
      <Card>
        <CardHeaderCommon title={BubbleCharts} borderClass={true}/>
        <CardBody>
          <div>
            <ReactApexChart options={bubbleChartData} series={bubbleChartData.series} type="bubble" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BubbleChart