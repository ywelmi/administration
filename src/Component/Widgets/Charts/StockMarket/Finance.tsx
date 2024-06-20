import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { Finances } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { financeChart } from '../../../../Data/Widgets/WidgetsChartData'

const Finance = () => {
  return (
    <Col xl="5" lg="12" className="box-col-12">
      <Card>
        <CardHeader>
          <H4>{Finances}</H4>
        </CardHeader>
        <CardBody>
          <div className="chart-container column-container">
            <ReactApexChart options={financeChart} series={financeChart.series} type="line" height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Finance