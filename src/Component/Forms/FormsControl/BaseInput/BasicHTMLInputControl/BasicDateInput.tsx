import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { BasicDatalistExample, BasicDate, BasicMonth, BasicTime, BasicWeek, ListPlaceholder } from "../../../../../utils/Constant";
import { countryList } from "../../../../../Data/Forms/FormsControl/BaseInput/BaseInput";

const BasicDateInput = () => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicDate}</Label>
          </Col>
          <Col sm="9">
            <Input className="digits" type="date" defaultValue="2018-01-01" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicMonth}</Label>
          </Col>
          <Col sm="9">
            <Input type="month" defaultValue="2018-01" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicWeek}</Label>
          </Col>
          <Col sm="9">
            <Input type="week" defaultValue="2018-W09" />
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicDatalistExample}</Label>
          </Col>
          <Col sm="9">
            <Input list="datalistOptions" placeholder={ListPlaceholder} />
            <datalist id="datalistOptions">
              {countryList.map((data, index) => (
                <option key={index} value={data} />
              ))}
            </datalist>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{BasicTime}</Label>
          </Col>
          <Col sm="9">
            <Input className="digits" type="time" defaultValue="21:45:00" />
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default BasicDateInput;
