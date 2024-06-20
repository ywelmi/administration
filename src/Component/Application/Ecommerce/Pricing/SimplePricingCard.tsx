import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { Btn, H3, H2, H6 } from '../../../../AbstractElements'
import { Href, Purchase, SimplePricingCards } from '../../../../utils/Constant'
import { simplePricingData } from '../../../../Data/Application/Ecommerce/Pricing'

const SimplePricingCard = () => {
  return (
    <Card>
      <CommonCardHeader title={SimplePricingCards} />
      <CardBody className='pricing-content'>
        <Row className="g-sm-4 g-3">
          {simplePricingData.map((item, index) => (
            <Col xl="3" sm="6" className="box-col-3 xl-50" key={index}>
              <Card className="text-center pricing-simple">
                <CardBody>
                  <H3>{item.title}</H3>
                  <H2>${item.price}</H2>
                  <H6 className="mb-0">{item.plan}</H6>
                </CardBody>
                <div>
                  <Btn block tag="a" color="primary" size="lg" href={Href}>{Purchase}</Btn>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  )
}

export default SimplePricingCard