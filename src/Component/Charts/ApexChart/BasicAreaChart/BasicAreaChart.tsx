import { Card, CardBody, Col } from 'reactstrap'
import { BasicAreaCharts } from '../../../../utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { basicAreaChartData } from '../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const BasicAreaChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={BasicAreaCharts} borderClass={true} />
        <CardBody>
          <div>
            <ReactApexChart options={basicAreaChartData} series={basicAreaChartData.series} type="area" height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicAreaChart