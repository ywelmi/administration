import { Col, Table } from 'reactstrap'
import { CurrentCartHeading } from '../../../../../../utils/Constant'
import { H5 } from '../../../../../../AbstractElements'
import CurrentCartTableHead from './CurrentCartTableHead'
import CurrentCartTableBody from './CurrentCartTableBody'
import CurrentCartTableFooter from './CurrentCartTableFooter'

const CurrentCart = () => {
  return (
    <Col xl="4">
      <div className="shipping-info">
        <H5>{CurrentCartHeading}</H5>
        <div className="overflow-auto theme-scrollbar">
          <Table striped>
            <CurrentCartTableHead />
            <CurrentCartTableBody />
            <CurrentCartTableFooter />
          </Table>
        </div>
      </div>
    </Col>
  )
}

export default CurrentCart