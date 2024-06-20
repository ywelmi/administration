import { ErrorMessage, Field } from 'formik'
import { Col, FormGroup, Label, Row } from 'reactstrap'
import { FixPrice, High, Hourly, Low, Medium, Priority, PriorityPlaceholder, ProjectProgress, ProjectProgressPlaceholder, ProjectStatus, Urgent } from '../../../../utils/Constant'

const ProjectSection = () => {
  return (
    <Row>
      <Col sm="4">
        <FormGroup>
          <Label check>{ProjectProgress}</Label>
          <Field name="progress" className="form-control" type="number" placeholder={ProjectProgressPlaceholder}/>
          <ErrorMessage name="progress" component="span" className="text-danger"/>
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <Label check>{ProjectStatus}</Label>
          <Field name="type" as="select" className="form-control form-select">
            <option>{Hourly}</option>
            <option>{FixPrice}</option>
          </Field>
        </FormGroup>
      </Col>
      <Col sm="4">
        <FormGroup>
          <Label>{Priority}</Label>
          <Field name="priority" as="select" placeholder={PriorityPlaceholder} className="form-control form-select">
            <option>{Low}</option>
            <option>{Medium}</option>
            <option>{High}</option>
            <option>{Urgent}</option>
          </Field>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default ProjectSection