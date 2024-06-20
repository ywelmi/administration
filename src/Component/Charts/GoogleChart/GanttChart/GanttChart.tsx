import { Card, CardBody, Col } from 'reactstrap'
import Chart from 'react-google-charts'
import { GanttCharts } from '../../../../utils/Constant'
import { ganttChartData, ganttChartDataOption } from '../../../../Data/Charts/GoogleChart/GoogleChartData'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const GanttChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CardHeaderCommon title={GanttCharts} borderClass={true} />
        <CardBody className="chart-block">
          <div className="chart-overflow">
            <Chart chartType="Gantt" width="100%" height="280px" data={ganttChartData} options={ganttChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default GanttChart