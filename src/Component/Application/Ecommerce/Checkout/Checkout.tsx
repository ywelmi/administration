import { Card, CardBody, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { BillingDetails, Checkouts, Ecommerce } from '../../../../utils/Constant'
import CheckoutForm from './CheckoutForm/CheckoutForm'
import ProductCheckout from './ProductCheckout/ProductCheckout'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const CheckoutContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Checkouts} parent={Ecommerce} />
      <Container fluid>
        <Card>
          <CommonCardHeader title={BillingDetails} />
          <CardBody>
            <Row>
              <CheckoutForm />
              <ProductCheckout />
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default CheckoutContainer