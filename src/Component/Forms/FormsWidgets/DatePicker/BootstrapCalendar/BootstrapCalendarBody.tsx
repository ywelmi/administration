import { CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { Date, DateAndTimeHeading, Month, Time, Week } from '../../../../../utils/Constant'

const BootstrapCalendarBody = () => {
  return (
    <CardBody className="card-wrapper">
        <FormGroup>
            <Row>
                <Col md="3">
                    <Label className="col-form-label">{DateAndTimeHeading}</Label>
                </Col>
                <Col md="9">
                    <Input className="digits" type="datetime-local" defaultValue="2024-05-03T18:45:00" />
                </Col>
            </Row>
        </FormGroup>
        <FormGroup>
            <Row>
                <Col md="3">
                    <Label className="col-form-label">{Date}</Label>
                </Col>
                <Col md="9">
                    <Input className="digits" type="date" defaultValue="2024-05-01" />
                </Col>
            </Row>
        </FormGroup>
        <FormGroup>
            <Row>
                <Col md="3">
                    <Label className="col-form-label">{Month}</Label>
                </Col>
                <Col md="9">
                    <Input className="digits" type="month" defaultValue="2024-01" />
                </Col>
            </Row>
        </FormGroup>
        <FormGroup>
            <Row >
                <Col md="3">
                    <Label className="col-form-label">{Week}</Label>
                </Col>
                <Col md="9">
                    <Input className="digits" type="week" defaultValue="2024-W09" />
                </Col>
            </Row>
        </FormGroup>
        <FormGroup>
            <Row>
                <Col md="3">
                    <Label className="col-form-label">{Time}</Label>
                </Col>
                <Col md="9">
                    <Input className="digits" type="time" defaultValue="21:45:00" />
                </Col>
            </Row>
        </FormGroup>
    </CardBody>
  )
}

export default BootstrapCalendarBody