import { Card, CardBody, Col } from 'reactstrap'
import { HoveringTimelines } from '../../../../utils/Constant'
import { hoveringTimeLineData } from '../../../../Data/BonusUi/Timeline/Timeline'
import { UL } from '../../../../AbstractElements'
import AnnualFunctionHoveringTimeline from './AnnualFunctionHoveringTimeline'
import InterviewHoveringTimeline from './InterviewHoveringTimeline'
import MeetupHoveringTimeline from './MeetupHoveringTimeline'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const HoveringTimeline = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={HoveringTimelines} span={hoveringTimeLineData} />
        <CardBody>
          <UL className="square-timeline simple-list">
            <AnnualFunctionHoveringTimeline />
            <InterviewHoveringTimeline />
            <MeetupHoveringTimeline />
          </UL>
        </CardBody>
      </Card>
    </Col>
  )
}

export default HoveringTimeline