import { Col, Container, Row } from 'reactstrap'
import { H3, H4 } from '../../../../AbstractElements'
import { CartEmpty } from '../../../../utils/Constant'

const EmptyCart = () => {
  return (
    <section className="cart-section section-b-space">
      <Container fluid>
        <Row>
          <Col sm="12">
            <div>
              <Col sm="12" className="empty-cart-cls text-center">
                <H3>{CartEmpty}</H3>
                <H4>{"Explore Short list Items"}</H4>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EmptyCart