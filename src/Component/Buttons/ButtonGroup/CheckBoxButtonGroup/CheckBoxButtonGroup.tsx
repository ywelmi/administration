import { Card, CardBody, Col, Row } from 'reactstrap'
import { CheckBoxButtonGroups } from '../../../../utils/Constant'
import { checkboxButtonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import StaticCheckBoxButtonGroup from './StaticCheckBoxButtonGroup'
import DynamicCheckBoxButtonGroup from './DynamicCheckBoxButtonGroup'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const CheckBoxButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CheckBoxButtonGroups} span={checkboxButtonGroupData} />
        <CardBody className="btn-group-showcase">
          <Row>
            <StaticCheckBoxButtonGroup />
            <DynamicCheckBoxButtonGroup />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CheckBoxButtonGroup