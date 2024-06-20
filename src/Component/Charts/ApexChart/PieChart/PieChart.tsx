import { Card, CardBody, Col } from 'reactstrap'
import { PieCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { pieChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const PieChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={PieCharts} borderClass={true}/>
        <CardBody>
          <div>
            <ReactApexChart options={pieChartData} series={pieChartData.series} type="pie" height={300} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PieChart