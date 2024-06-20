import { ErrorMessage, Field } from 'formik'
import { Col, FormGroup, Label, Row } from 'reactstrap'
import { ClientName, ClientPlaceholder, ProjectNamePlaceholder, ProjectTitle } from '../../../../utils/Constant'

const TitleAndClientSection = () => {
  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{ProjectTitle}</Label>
            <Field name="title" type="text" className="form-control" placeholder={ProjectNamePlaceholder} />
            <ErrorMessage name="title" component="span" className="text-danger" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{ClientName}</Label>
            <Field name="client" className="form-control" type="text" placeholder={ClientPlaceholder} />
            <ErrorMessage name="client" component="span" className="text-danger" />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default TitleAndClientSection