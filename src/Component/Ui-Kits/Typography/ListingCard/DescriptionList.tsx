import { Fragment } from 'react'
import { Col } from 'reactstrap'
import { orderListData } from '../../../../Data/Ui-Kits/Typography/Typography'
import { DescriptionLists } from '../../../../utils/Constant'
import { H6 } from '../../../../AbstractElements'

const DescriptionList = () => {
  return (
    <Col md="12" xxl="4">
      <div className="card-wrapper border rounded-3">
        <H6 className="sub-title fw-bold">{DescriptionLists}</H6>
        <dl className="pb-1">
          {orderListData.map((item, index) => (
            <Fragment key={index}>
              <dt>{item.dt}</dt>
              <dd>{item.dd}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </Col>
  )
}

export default DescriptionList