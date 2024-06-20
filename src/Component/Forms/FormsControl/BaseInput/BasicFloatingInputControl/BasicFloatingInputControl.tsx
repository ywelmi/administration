import { Card, Col } from 'reactstrap'
import { basicFloatSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { BasicFloatingInputControls } from '../../../../../utils/Constant'
import BasicFloatingInputControlForm from './BasicFloatingInputControlForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const BasicFloatingInputControl = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicFloatingInputControls} span={basicFloatSubTitle}/>
        <BasicFloatingInputControlForm />
      </Card>
    </Col>
  )
}

export default BasicFloatingInputControl