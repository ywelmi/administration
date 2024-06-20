import { Radar } from "react-chartjs-2";
import { Card, CardBody, Col } from 'reactstrap'
import { ChatJSRadarGraph } from '../../../../utils/Constant'
import { radarGraphChartData } from "../../../../Data/Charts/ChartJs/ChartJs";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const RadarGraph = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CardHeaderCommon title={ChatJSRadarGraph} borderClass={true}/>
        <CardBody className="chart-block">
          <Radar data={radarGraphChartData} options={radarGraphChartData.options} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadarGraph