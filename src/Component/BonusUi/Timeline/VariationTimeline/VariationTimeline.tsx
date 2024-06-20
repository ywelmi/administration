import { Card, CardBody, Col } from 'reactstrap'
import { VariationTimelines } from '../../../../utils/Constant'
import { variationTimeLineData } from '../../../../Data/BonusUi/Timeline/Timeline'
import { UL } from '../../../../AbstractElements'
import StaticVariationTimeline from './StaticVariationTimeline'
import DynamicVariationTimeline from './DynamicVariationTimeline'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const VariationTimeline = () => {
  return (
    <Col xxl="4" xl="5" className="notification box-col-12">
      <Card>
        <CardHeaderCommon title={VariationTimelines} span={variationTimeLineData} />
        <CardBody className="dark-timeline">
          <UL className="simple-list">
            <StaticVariationTimeline/>
            <DynamicVariationTimeline />
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VariationTimeline