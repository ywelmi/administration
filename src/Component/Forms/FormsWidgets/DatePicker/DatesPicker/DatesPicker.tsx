import { Card, CardBody, Col, Form } from 'reactstrap'
import { DatePicker } from '../../../../../utils/Constant'
import DatePickerComponentFirst from './DatePickerComponentFirst'
import HumanFriendlyDatePicker from './HumanFriendlyDatePicker'
import MinMaxValueDatePicker from './MinMaxValueDatePicker'
import DisabledDatePickerComponent from './DisabledDatePickerComponent'
import MultiplesDates from './MultiplesDates'
import MyDatePicker from './MyDatePicker'
import DatePickerComponentLast from './DatePickerComponentLast'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const DatesPicker = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={DatePicker} borderClass={true}/>
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <Form className="timepicker-wrapper">
              <DatePickerComponentFirst />
              <HumanFriendlyDatePicker />
              <MinMaxValueDatePicker />
              <DisabledDatePickerComponent />
              <MultiplesDates />
              <MyDatePicker />
              <DatePickerComponentLast />
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DatesPicker