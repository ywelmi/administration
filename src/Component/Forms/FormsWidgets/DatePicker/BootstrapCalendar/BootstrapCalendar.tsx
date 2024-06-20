import { Card, Col } from 'reactstrap'
import { CalendarBootstrap } from '../../../../../utils/Constant'
import BootstrapCalendarBody from './BootstrapCalendarBody'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const BootstrapCalendar = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={CalendarBootstrap} borderClass={true} />
        <BootstrapCalendarBody/>
      </Card>
    </Col>
  )
}

export default BootstrapCalendar