import { Container, Row } from 'reactstrap'
import CreditCard from './CreditCard'
import DebitCard from './DebitCard'
import CodForm from './CodForm'
import EmiForm from './EmiForm'
import NetBanking from './NetBanking'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Ecommerce, PaymentDetails } from '../../../../utils/Constant'

const PaymentDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={PaymentDetails} parent={Ecommerce} />
      <Container fluid className="credit-card">
        <Row>
          <CreditCard />
          <DebitCard />
          <CodForm />
          <EmiForm />
          <NetBanking />
        </Row>
      </Container>
    </>
  )
}

export default PaymentDetailsContainer