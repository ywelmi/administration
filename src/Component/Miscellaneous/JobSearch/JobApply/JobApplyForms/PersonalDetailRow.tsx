import { Col, FormGroup, Row } from 'reactstrap'
import { BirthDateJob } from '../../../../../utils/Constant'
import { Typeahead } from "react-bootstrap-typeahead";
import { daysJob, monthsJob, yearsJob } from '../../../../../Data/Miscellaneous/JobSearch/JobSearch';

const PersonalDetailRow = () => {
  return (
    <Row>
      <Col sm="4">
        <div className="col-form-label pt-0">{BirthDateJob}</div>
        <FormGroup>
          <Typeahead labelKey="name" multiple={false} id="Month" options={monthsJob} placeholder="Choose a Month..."/>
        </FormGroup>
      </Col>
      <Col sm="4">
        <div className="col-form-label m-2 d-sm-block d-none"></div>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={daysJob} id="date" placeholder="date"/>
        </FormGroup>
      </Col>
      <Col sm="4">
        <div className="col-form-label m-2 d-sm-block d-none"></div>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={yearsJob} id="Year" placeholder="Year"/>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default PersonalDetailRow