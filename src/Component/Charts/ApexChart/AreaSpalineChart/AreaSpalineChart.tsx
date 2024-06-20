import { Card, CardBody, Col } from 'reactstrap'
import { AreaSpalineCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { areaSaplingChart } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const AreaSpalineChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={AreaSpalineCharts} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={areaSaplingChart} series={areaSaplingChart.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default AreaSpalineChart