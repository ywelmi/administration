import { Col, FormGroup, Label, Row } from 'reactstrap'
import { EnterSomeDetails } from '../../../../utils/Constant'
import { ErrorMessage, Field } from 'formik'

const DescriptionSection = () => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{EnterSomeDetails}</Label>
          <Field name="description" as="textarea" className="form-control" rows={3} />
          <ErrorMessage name="description" component="span" className="text-danger" />
        </FormGroup>
      </Col>
    </Row>
  )
}

export default DescriptionSection