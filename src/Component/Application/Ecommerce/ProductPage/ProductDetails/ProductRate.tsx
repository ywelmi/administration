import { Col, Row } from 'reactstrap'
import { H5 } from '../../../../../AbstractElements'
import { RateNow } from '../../../../../utils/Constant'
import CommonRating from '../../CommonRating/CommonRating';

const ProductRate = () => {
  return (
    <Row>
      <Col md="4">
        <H5 className="product-title f-w-600">{RateNow}</H5>
      </Col>
      <Col md="8">
        <div className="d-flex">
          <CommonRating />
          <span>(250 review)</span>
        </div>
      </Col>
    </Row>
  )
}

export default ProductRate