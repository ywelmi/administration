import { Card, CardBody, Col, Row } from 'reactstrap'
import { RadioButtonGroups } from '../../../../utils/Constant'
import { radioButtonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import StaticRadioButtonGroup from './StaticRadioButtonGroup'
import DynamicRadioButtonGroup from './DynamicRadioButtonGroup'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const RadioButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={RadioButtonGroups} span={radioButtonGroupData} />
        <CardBody className="btn-group-showcase">
          <Row>
            <StaticRadioButtonGroup />
            <DynamicRadioButtonGroup />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadioButtonGroup