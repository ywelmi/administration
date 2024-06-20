import { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import { Col, InputGroup, Label, Row } from 'reactstrap';
import { HumanFriendly } from '../../../../../utils/Constant';

const HumanFriendlyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date: Date) => setStartDate(date);
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start" check>{HumanFriendly}</Label>
      </Col>
      <Col xxl="9" className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={handleChange} dateFormat="MMMM dd,yyyy" />
        </InputGroup>
      </Col>
    </Row>
  );
}

export default HumanFriendlyDatePicker