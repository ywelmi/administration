import { Col, Label, Row } from "reactstrap";
import { PublishDateTime } from "../../../../../../utils/Constant";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";

const SelectFive = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date: Date) => setStartDate(date);
  return (
    <Col sm="6">
      <Row>
        <Col xs="12">
          <Label for="validationServer01"> {PublishDateTime} </Label>
          <div className="input-group flatpicker-calender product-date">
            <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={handleChange} />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectFive;
