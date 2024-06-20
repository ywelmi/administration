import { Doughnut } from "react-chartjs-2";
import { Card, CardBody, Col } from 'reactstrap'
import { ChatJSLineChart } from '../../../../utils/Constant'
import { doughnutChartData, doughnutChartDataOption } from '../../../../Data/Charts/ChartJs/ChartJs'
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const DoughnutChart = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CardHeaderCommon title={ChatJSLineChart} borderClass={true}/>
        <CardBody className="chart-block">
          <Doughnut data={doughnutChartData} options={doughnutChartDataOption} width={734} height={335} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default DoughnutChart