import { Card, CardBody, Col, Row } from 'reactstrap'
import { AnimatedButton } from '../../../../../utils/Constant'
import AnimatedRadio from './AnimatedRadio'
import AnimatedCheckbox from './AnimatedCheckbox'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { animatedButtonData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const AnimatedButtons = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={AnimatedButton} span={animatedButtonData} />
        <CardBody>
          <Row className="g-3">
            <AnimatedRadio />
            <AnimatedCheckbox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default AnimatedButtons