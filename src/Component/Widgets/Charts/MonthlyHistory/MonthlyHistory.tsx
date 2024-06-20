import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import ReactApexChart from 'react-apexcharts'
import { MonthlyHistoryHeading } from '../../../../utils/Constant'
import { monthlyHistoryChart } from '../../../../Data/Widgets/WidgetsChartData'
import SkillStatus from './SkillStatus'
import OrderStatus from './OrderStatus'

const MonthlyHistory = () => {
  return (
    <Row>
      <Col md="12" className="box-col-12">
        <Card className="o-hidden">
          <CardHeader>
            <H4>{MonthlyHistoryHeading}</H4>
          </CardHeader>
          <div className="bar-chart-widget">
            <CardBody className="bottom-content">
              <Row>
                <Col xs="12">
                  <ReactApexChart options={monthlyHistoryChart} series={monthlyHistoryChart.series} type="bar" height={380}/>
                </Col>
              </Row>
            </CardBody>
          </div>
        </Card>
      </Col>
      <SkillStatus />
      <OrderStatus />
    </Row>
  )
}

export default MonthlyHistory