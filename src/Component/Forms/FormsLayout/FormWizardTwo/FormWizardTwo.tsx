import { Container, Row } from 'reactstrap'
import CustomHorizontalWizard from './CustomHorizontalWizard/CustomHorizontalWizard'
import { BusinessHorizontalWizardHeading, BusinessVerticalWizardHeading, CustomHorizontalWizardHeading, CustomVerticalWizardHeading, FormLayout, StepFormWizard } from '../../../../utils/Constant'
import BusinessVerticalWizard from './BusinessVerticalWizard/BusinessVerticalWizard'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const FormWizardTwoContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={StepFormWizard} parent={FormLayout} />
      <Container fluid>
        <Row>
          <CustomHorizontalWizard heading={CustomHorizontalWizardHeading} xs={12} />
          <BusinessVerticalWizard heading={BusinessVerticalWizardHeading} firstXl={3} secondXl={9} horizontalWizardClass="vertical-options" />
          <CustomHorizontalWizard differentId heading={CustomVerticalWizardHeading} horizontalWizardClass="vertical-options" firstXl={3} secondXl={9} />
          <BusinessVerticalWizard heading={BusinessHorizontalWizardHeading} xs={12} />
        </Row>
      </Container>
    </>
  )
}

export default FormWizardTwoContainer