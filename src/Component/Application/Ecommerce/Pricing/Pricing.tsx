import { Col, Container, Row } from 'reactstrap'
import BecomeMember from './BecomeMember'
import SimplePricingCard from './SimplePricingCard'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Ecommerce, Pricing } from '../../../../utils/Constant'

const PricingContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Pricing} parent={Ecommerce} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <BecomeMember />
            <SimplePricingCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PricingContainer