import { Card, CardBody, Col, Form, InputGroup, Label, Row } from 'reactstrap'
import { DateWithTime, PreloadingTime, TimPickers, TimePickerHeading, TimePickerLimits, TimePickerMinMaxRange, TimePickerRange, HourPicker } from '../../../../../utils/Constant'
import OnlyTimePicker from './OnlyTimePicker'
import TimePicker24Hours from './TimePicker24Hours'
import TimePickerWithLimitedTime from './TimePickerWithLimitedTime'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const TimePicker = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={TimPickers} borderClass={true}/>
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <Form className="timepicker-wrapper">
              <Row>
                <Col xxl="3">
                  <Label className="box-col-12 text-start" check>{TimePickerHeading}</Label>
                </Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup><OnlyTimePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3">
                  <Label className="box-col-12 text-start" check>{HourPicker}</Label>
                </Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup><TimePicker24Hours/></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3">
                  <Label className="box-col-12 text-start" check>{TimePickerLimits}</Label>
                </Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup><OnlyTimePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3">
                  <Label className="box-col-12 text-start" check>{PreloadingTime}</Label>
                </Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup><OnlyTimePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3">
                  <Label className="box-col-12 text-start" check>{TimePickerRange}</Label>
                </Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup><TimePickerWithLimitedTime /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3">
                  <Label className="box-col-12 text-start" check>{TimePickerMinMaxRange}</Label>
                </Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3">
                  <Label className="box-col-12 text-start" check>{DateWithTime}</Label>
                </Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default TimePicker