import { Card, CardBody, Col } from 'reactstrap'
import { ColumnCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { columnChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const FirstColumnChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={ColumnCharts} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={columnChartData} series={columnChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FirstColumnChart