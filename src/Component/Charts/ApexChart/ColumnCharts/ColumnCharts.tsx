import { Card, CardBody, Col } from 'reactstrap'
import { ChartColumn } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { annotationChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const ColumnCharts = () => {
  return (
    <Col sm="12" xl="12" className="box-col-6">
      <Card>
        <CardHeaderCommon title={ChartColumn} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={annotationChartData} series={annotationChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ColumnCharts