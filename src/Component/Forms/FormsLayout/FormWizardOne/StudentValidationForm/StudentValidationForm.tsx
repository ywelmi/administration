import { Card, CardBody, Col } from 'reactstrap'
import { StudentValidationFormHeading } from '../../../../../utils/Constant'
import { studentValidationData } from '../../../../../Data/Forms/FormsLayout/FormWizardOne/FormWizardOne'
import StudentValidationFormCardBody from './StudentValidationFormCardBody'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const StudentValidationForm = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={StudentValidationFormHeading} span={studentValidationData}/>
        <CardBody className="custom-input">
          <StudentValidationFormCardBody />
        </CardBody>
      </Card>
    </Col>
  )
}

export default StudentValidationForm