import { useState } from 'react'
import { PreloadingDates } from '../../../../../utils/Constant';
import { Col, InputGroup, Label, Row } from 'reactstrap';
import ReactDatePicker from 'react-datepicker';

const DatePickerComponentLast = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date: Date) => {
      setStartDate(date);
    };
    return (
      <Row>
        <Col xxl="3">
          <Label className="box-col-12 text-start" check>{PreloadingDates}</Label>
        </Col>
        <Col xxl="9" className="box-col-12">
          <InputGroup className="flatpicker-calender">
            <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={handleChange} />
          </InputGroup>
        </Col>
      </Row>
    );
}

export default DatePickerComponentLast