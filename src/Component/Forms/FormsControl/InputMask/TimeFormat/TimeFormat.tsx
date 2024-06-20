import { Col, Form, Label, Row } from 'reactstrap'
import { HourMonthType, TimeFormatHeading, TimeFormatType } from '../../../../../utils/Constant'
import Cleave from "cleave.js/react";
import { H6 } from '../../../../../AbstractElements'

const TimeFormat = () => {
  return (
    <Col sm="6" >
      <div className="card-wrapper border rounded-3 light-card checkbox-checked">
        <H6 className="pb-3 f-w-500">{TimeFormatHeading}</H6>
        <Form>
          <Row className='g-3'>
            <Col xs="12" >
              <Label className="col-form-label" >{TimeFormatType}</Label>
              <Cleave className="form-control" options={{ time: true, timePattern: ["h", "m", "s"] }} placeholder="hh:mm:ss"/>
            </Col>
            <Col xs="12">
              <Label className="col-form-label">{HourMonthType}</Label>
              <Cleave className="form-control" options={{ time: true, timePattern: ["h", "m"] }} placeholder="hh:mm"/>
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  )
}

export default TimeFormat