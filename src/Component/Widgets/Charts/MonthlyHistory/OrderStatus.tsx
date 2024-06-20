import { Card, CardBody, Col } from 'reactstrap'
import { OrdersStatusHeading } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { progressChart1, progressChart2, progressChart3, progressChart4, progressChart5 } from '../../../../Data/Widgets/WidgetsChartData'
import CommonCardHeader from '../../CommonCardHeader/CommonCardHeader'

const OrderStatus = () => {
  return (
    <Col xl="6" lg="12" className="box-col-6 xl-50">
      <Card>
        <CommonCardHeader title={OrdersStatusHeading} firstItem="Today" secondItem="Tomorrow" thirdItem="Yesterday" mainTitle= "Today" />
        <CardBody>
          <div className="chart-container progress-chart">
            <ReactApexChart options={progressChart1} series={progressChart1.series} type="bar" height={70}/>
            <ReactApexChart options={progressChart2} series={progressChart2.series} type="bar" height={70}/>
            <ReactApexChart options={progressChart3} series={progressChart3.series} type="bar" height={70}/>
            <ReactApexChart options={progressChart4} series={progressChart4.series} type="bar" height={70}/>
            <ReactApexChart options={progressChart5} series={progressChart5.series} type="bar" height={70}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OrderStatus