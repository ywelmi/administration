import { Col, Row } from 'reactstrap'
import TotalProjectCard from '../../../Dashboard/Ecommerce/TotalProject/TotalProjectCard'
import TotalSalesCard from '../../../Dashboard/Default/TotalSales/TotalSalesCard'
import UserVisitsDay from './UserVisitsDay/UserVisitsDay'
import BoostUpYourSale from './BoostUpYourSale/BoostUpYourSale'
import WidgetsSalesChart from './WidgetsSalesChart/WidgetsSalesChart'
import WidgetTimeLine from './WidgetTimeLine/WidgetTimeLine'

const WidgetTotalProject = () => {
  return (
    <Col xxl="9" className="box-col-12">
      <Row>
        <TotalProjectCard />
        <TotalSalesCard changeClass={true} />
        <UserVisitsDay />
        <BoostUpYourSale />
        <WidgetTimeLine />
        <WidgetsSalesChart />
      </Row>
    </Col>
  )
}

export default WidgetTotalProject