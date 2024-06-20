import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import TicketList from './TicketList/TicketList'
import TicketTable from './TicketTable/TicketTable'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Apps, SupportTicket, SupportTicketList } from '../../../utils/Constant'
import { H4 } from '../../../AbstractElements'

const SupportTicketContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SupportTicket} parent={Apps} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H4>{SupportTicketList}</H4>
                <span>List of ticket opend by customers</span>
              </CardHeader>
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SupportTicketContainer