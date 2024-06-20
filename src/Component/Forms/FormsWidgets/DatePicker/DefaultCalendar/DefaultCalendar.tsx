import { useState } from 'react'
import { Card, CardBody, Col, Input, InputGroup, Row } from 'reactstrap';
import { CalendarDefault } from '../../../../../utils/Constant';
import Calendar from "react-calendar";
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon';

const DefaultCalendar = () => {
  const [dateValue, setDateValue] = useState<Date>(new Date());
  const date = `${dateValue.getDate()} - ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={CalendarDefault} borderClass={true}/>
        <CardBody className="card-wrapper">
          <Row className="g-3">
            <Col xs="12"> 
              <InputGroup className="main-inline-calender">
                <Input placeholder={date} className="mb-2 flatpickr-input" readOnly />
                <Calendar onChange={(value)=>setDateValue(value as Date)} value={dateValue} className="w-100" />
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DefaultCalendar