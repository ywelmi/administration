import { Col } from 'reactstrap'
import { H6, LI, UL } from '../../../../AbstractElements'
import { UnOrderList } from '../../../../utils/Constant'
import { unOrderData } from '../../../../Data/Ui-Kits/Typography/Typography'

const UnOrderLists = () => {
  return (
    <Col md="6" xxl="4">
      <div className="card-wrapper border rounded-3">
        <H6 className="sub-title fw-bold">{UnOrderList}</H6>
        <UL className="mb-3 simple-list">
          <LI>{"One who looks on the bright side of things"}</LI>
          {unOrderData.map((item, index) => (
            <LI key={index}>{item}</LI>
          ))}
        </UL>
      </div>
    </Col>
  )
}

export default UnOrderLists