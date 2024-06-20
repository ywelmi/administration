import { Col } from 'reactstrap'
import SpecialOffers from './SpecialOffers/SpecialOffers'
import AddNewWidgetProduct from './AddNewWidgetProduct/AddNewWidgetProduct'
import TotalWidgetRevenue from './TotalWidgetRevenue/TotalWidgetRevenue'

const WidgetSpecialOffer = () => {
  return (
    <Col xl="3" className="d-xxl-block d-none box-col-none">
      <SpecialOffers />
      <AddNewWidgetProduct />
      <TotalWidgetRevenue />
    </Col>
  )
}

export default WidgetSpecialOffer