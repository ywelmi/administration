import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import ReactApexChart from 'react-apexcharts'
import { turnOverChart } from '../../../../Data/Widgets/WidgetsChartData'
import { TurnOver } from '../../../../utils/Constant'

const Turnover = () => {
  return (
    <Col xl="5" lg="12" className="xl-50">
      <Card>
        <CardHeader>
          <H4>{TurnOver}</H4>
        </CardHeader>
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs="12">
                <ReactApexChart options={turnOverChart} series={turnOverChart.series} type="area" height={300}/>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Turnover