import { Container, Row } from 'reactstrap'
import DefaultCalendar from './DefaultCalendar/DefaultCalendar'
import BootstrapCalendar from './BootstrapCalendar/BootstrapCalendar'
import DatesPicker from './DatesPicker/DatesPicker'
import TimePicker from './TimePicker/TimePicker'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { DatePicker, FormsWidgets } from '../../../../utils/Constant'

const DatePickerContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DatePicker} parent={FormsWidgets} />
      <Container fluid>
        <Row>
          <DefaultCalendar />
          <BootstrapCalendar />
          <DatesPicker />
          <TimePicker />
        </Row>
      </Container>
    </>
  )
}

export default DatePickerContainer