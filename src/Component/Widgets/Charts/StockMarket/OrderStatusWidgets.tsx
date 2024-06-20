import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { OrdersStatus } from '../../../../utils/Constant'
import { H4 } from '../../../../AbstractElements'
import { orderStatusChart } from '../../../../Data/Widgets/WidgetsChartData'

const OrderStatusWidgets = () => {
  return (
    <Col xl="7" lg="12" className="box-col-6">
      <Card>
        <CardHeader>
          <H4>{OrdersStatus}</H4>
        </CardHeader>
        <CardBody>
          <div className="chart-container">
            <ReactApexChart options={orderStatusChart} series={orderStatusChart.series} type="line" height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OrderStatusWidgets