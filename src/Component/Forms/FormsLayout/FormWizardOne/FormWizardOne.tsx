import { Container, Row } from 'reactstrap'
import NumberingWizard from './NumberingWizard/NumberingWizard'
import StudentValidationForm from './StudentValidationForm/StudentValidationForm'
import VerticalValidationWizard from './VerticalValidationWizard/VerticalValidationWizard'
import ShippingForm from './ShippingForm/ShippingForm'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FormLayout, FormWizard } from '../../../../utils/Constant'

const FormWizardOneContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FormWizard} parent={FormLayout} />
      <Container fluid>
        <Row>
          <NumberingWizard />
          <StudentValidationForm />
          <VerticalValidationWizard />
          <ShippingForm />
        </Row>
      </Container>
    </>
  )
}

export default FormWizardOneContainer