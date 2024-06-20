import { Card, Col } from 'reactstrap'
import { flatInputStyleSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { FlatInputStyles } from '../../../../../utils/Constant'
import FlatInputStyleForm from './FlatInputStyleForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const FlatInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FlatInputStyles} span={flatInputStyleSubTitle} headClass="pb-0" />
        <FlatInputStyleForm />
      </Card>
    </Col>
  )
}

export default FlatInputStyle