import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import ReactApexChart from 'react-apexcharts'
import { liveProductChart } from '../../../../Data/Widgets/WidgetsChartData'
import { LiveProduct } from '../../../../utils/Constant'
import Turnover from './Turnover'
import CryptocurrencyPrices from './CryptocurrencyPrices'
import CryptoAnnotations from './CryptoAnnotations'

const LiveProducts = () => {
  return (
    <Row>
      <Col xl="7" lg="12" className="xl-50">
        <div className="small-chart-widget chart-widgets-small">
          <Card>
            <CardHeader>
              <H4>{LiveProduct}</H4>
            </CardHeader>
            <CardBody>
              <div className="chart-container">
                <Row>
                  <Col xs="12">
                    <ReactApexChart options={liveProductChart} series={liveProductChart.series} type="area" height={320} />
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
      <Turnover />
      <CryptocurrencyPrices />
      <CryptoAnnotations />
    </Row>
  )
}

export default LiveProducts