import { Card, CardBody, Col } from 'reactstrap'
import GridCommonCardFooter from '../Common/GridCommonCardFooter'
import StaticHorizontalAlignment from './StaticHorizontalAlignment'
import DynamicHorizontalAlignment from './DynamicHorizontalAlignment'
import { alignmentData } from '../../../../Data/Ui-Kits/Grid/GridData'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { HorizontalAlignment, HorizontalAlignmentClass, HorizontalAlignmentValueClass } from '../../../../utils/Constant'

const HorizontalAlignmentCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={HorizontalAlignment} span={alignmentData} />
        <CardBody className="grid-showcase grid-align">
          <StaticHorizontalAlignment />
          <DynamicHorizontalAlignment />
        </CardBody>
        <GridCommonCardFooter className={HorizontalAlignmentClass} valueClass={HorizontalAlignmentValueClass} />
      </Card>
    </Col>
  )
}

export default HorizontalAlignmentCart