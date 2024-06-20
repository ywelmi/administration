import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { MonthlySale } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { monthlySalesChart } from '../../../../Data/Widgets/WidgetsChartData'

const MonthlySales = () => {
  return (
    <Col xl="5" lg="12" className="xl-50 box-col-6">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CardHeader>
            <H4>{MonthlySale}</H4>
          </CardHeader>
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <ReactApexChart options={monthlySalesChart} series={monthlySalesChart.series} type="radar" height={300}/>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  )
}

export default MonthlySales