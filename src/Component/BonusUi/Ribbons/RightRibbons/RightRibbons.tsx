import { Card, CardBody, Col, Row } from 'reactstrap'
import { VariationsOfRightRibbons } from '../../../../utils/Constant'
import { rightRibbonData } from '../../../../Data/BonusUi/Ribbons/Ribbons'
import StaticRightRibbons from './StaticRightRibbons'
import DynamicRightRibbons from './DynamicRightRibbons'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const RightRibbons = () => {
  return (
    <Row>
      <Col sm="12" xl="12">
        <Card>
          <CardHeaderCommon title={VariationsOfRightRibbons} span={rightRibbonData} />
          <CardBody>
            <Row className="g-3">
              <StaticRightRibbons />
              <DynamicRightRibbons />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default RightRibbons