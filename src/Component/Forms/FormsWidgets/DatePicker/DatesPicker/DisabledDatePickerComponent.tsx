import { useState } from 'react'
import { addDays } from "date-fns";
import { Col, InputGroup, Label, Row } from 'reactstrap';
import { DisabledDates } from '../../../../../utils/Constant';
import ReactDatePicker from 'react-datepicker';

const DisabledDatePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const today = new Date();
    const tomorrow = addDays(today, 1);
    const disabledDates: Date[] = [today, tomorrow];
  
    return (
      <Row>
        <Col xxl="3">
          <Label className="box-col-12 text-start" check>{DisabledDates}</Label>
        </Col>
        <Col xxl="9" className="box-col-12">
          <InputGroup className="flatpicker-calender">
            <ReactDatePicker className="form-control" selected={selectedDate} onChange={(date: Date) => setSelectedDate(date)} excludeDates={disabledDates} placeholderText="Select a date other than today or yesterday" />
          </InputGroup>
        </Col>
      </Row>
    );
}

export default DisabledDatePickerComponent