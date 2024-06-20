import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import ReactApexChart from 'react-apexcharts'
import { CryptoAnnotation } from '../../../../utils/Constant'
import { cryptoAnnotationChart } from '../../../../Data/Widgets/WidgetsChartData'

const CryptoAnnotations = () => {
  return (
    <Col xl="6" lg="12" className="xl-50">
      <Card>
        <CardHeader>
          <H4>{CryptoAnnotation}</H4>
        </CardHeader>
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs="12">
                <ReactApexChart options={cryptoAnnotationChart} series={cryptoAnnotationChart.series} type="line" height={400}/>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CryptoAnnotations