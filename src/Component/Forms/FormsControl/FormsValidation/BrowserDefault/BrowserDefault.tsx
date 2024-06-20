import { Card, CardBody, Col } from 'reactstrap'
import { BrowserDefaults } from '../../../../../utils/Constant'
import { browserDefaultSubTitle } from '../../../../../Data/Forms/FormsControl/FormsValidation/FormsValidation'
import BrowserDefaultForm from './BrowserDefaultForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BrowserDefault = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BrowserDefaults} span={browserDefaultSubTitle}/>
        <CardBody className="custom-input">
          <BrowserDefaultForm />
        </CardBody>
      </Card>
    </Col>
  )
}

export default BrowserDefault