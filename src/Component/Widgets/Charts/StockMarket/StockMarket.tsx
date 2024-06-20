import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { StockMarkets } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { stockMarketChart } from '../../../../Data/Widgets/WidgetsChartData'
import Finance from './Finance'
import OrderStatusWidgets from './OrderStatusWidgets'
import MonthlySales from './MonthlySales'
import UsesWidgets from './UsesWidgets'

const StockMarket = () => {
  return (
    <Row>
      <Col sm="12" className="box-col-12">
        <div className="donut-chart-widget">
          <Card>
            <CardHeader>
              <H4>{StockMarkets}</H4>
            </CardHeader>
            <CardBody>
              <ReactApexChart options={stockMarketChart} series={stockMarketChart.series} type="line" height={450} />
            </CardBody>
          </Card>
        </div>
      </Col>
      <Finance />
      <OrderStatusWidgets />
      <MonthlySales />
      <UsesWidgets />
    </Row>
  )
}

export default StockMarket