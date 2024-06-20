import { PolarArea } from "react-chartjs-2";
import { Card, CardBody, Col } from 'reactstrap'
import { ChatJSPolarChart } from '../../../../utils/Constant'
import { polarChartData, polarChartDataOption } from '../../../../Data/Charts/ChartJs/ChartJs'
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const PolarChart = () => {
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CardHeaderCommon title={ChatJSPolarChart} borderClass={true}/>
        <CardBody className="chart-block">
          <PolarArea data={polarChartData} options={polarChartDataOption} width={734} height={335} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default PolarChart