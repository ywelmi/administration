import { Card, Col } from 'reactstrap'
import { edgesInputStyleSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { EdgesInputStyles } from '../../../../../utils/Constant'
import EdgesInputStyleForm from './EdgesInputStyleForm'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const EdgesInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={EdgesInputStyles} span={edgesInputStyleSubTitle}/>
        <EdgesInputStyleForm />
      </Card>
    </Col>
  )
}

export default EdgesInputStyle