import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import ReactApexChart from 'react-apexcharts'
import { Uses } from '../../../../utils/Constant'
import { usesChart } from '../../../../Data/Widgets/WidgetsChartData'

const UsesWidgets = () => {
  return (
    <Col xl="7" lg="12" className="xl-50 box-col-12">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CardHeader>
            <H4>{Uses}</H4>
          </CardHeader>
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <ReactApexChart options={usesChart} series={usesChart.series} type="bubble" height={320} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  )
}

export default UsesWidgets