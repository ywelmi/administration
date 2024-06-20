import { Card, Col } from 'reactstrap'
import { basicHTMLSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { BasicHtmlInputControls } from '../../../../../utils/Constant'
import BasicHTMLInputControlForm from './BasicHTMLInputControlForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BasicHTMLInputControl = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicHtmlInputControls} span={basicHTMLSubTitle}/>
        <BasicHTMLInputControlForm />
      </Card>
    </Col>
  )
}

export default BasicHTMLInputControl