import { Card, CardBody, Col } from 'reactstrap'
import { CandlestickCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { candleStickChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const CandlestickChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-12">
      <Card>
        <CardHeaderCommon title={CandlestickCharts} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={candleStickChartData} series={candleStickChartData.series} type="candlestick" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CandlestickChart