import { Card, Col } from 'reactstrap'
import { raiseInputStyleSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { RaiseInputStyles } from '../../../../../utils/Constant'
import RaiseInputStyleForm from './RaiseInputStyleForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const RaiseInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={RaiseInputStyles} span={raiseInputStyleSubTitle} />
        <RaiseInputStyleForm />
      </Card>
    </Col>
  )
}

export default RaiseInputStyle