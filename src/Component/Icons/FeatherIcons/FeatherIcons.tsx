import { Card, Col, Container, Row } from 'reactstrap'
import { FeatherIcons, Icons } from '../../../utils/Constant'
import FeatherIconCardBody from './FeatherIconCardBody'
import CardHeaderCommon from '../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'

const FeatherIconsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FeatherIcons} parent={Icons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeaderCommon title={FeatherIcons} />
              <FeatherIconCardBody />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FeatherIconsContainer