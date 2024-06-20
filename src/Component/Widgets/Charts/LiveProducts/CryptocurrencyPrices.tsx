import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import ReactApexChart from 'react-apexcharts'
import { CryptocurrencyPrice } from '../../../../utils/Constant'
import { cryptoCurrencyPrice } from '../../../../Data/Widgets/WidgetsChartData'

const CryptocurrencyPrices = () => {
  return (
    <Col xl="6" lg="12" className="xl-50">
      <Card>
        <CardHeader>
          <H4>{CryptocurrencyPrice}</H4>
        </CardHeader>
        <CardBody>
          <div className="chart-container crypto-chart">
            <Row>
              <Col xs="12">
                <ReactApexChart options={cryptoCurrencyPrice} series={cryptoCurrencyPrice.series} type="area" height={400} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CryptocurrencyPrices