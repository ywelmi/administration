import { Container, Row } from 'reactstrap'
import TwoFactorAuthentication from './TwoFactorAuthentication/TwoFactorAuthentication'
import EmailVerification from './EmailVerification/EmailVerification'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FormLayout, TwoFactor } from '../../../../utils/Constant'

const TwoFactorContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={TwoFactor} parent={FormLayout} />
      <Container fluid>
        <Row>
          <TwoFactorAuthentication />
          <EmailVerification />
        </Row>
      </Container>
    </>
  )
}

export default TwoFactorContainer