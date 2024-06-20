import { Card, CardBody, Col } from 'reactstrap'
import { TimelineTitle } from '../../../../utils/Constant'
import { VerticalTimeline } from "react-vertical-timeline-component";
import { timeLineData } from '../../../../Data/BonusUi/Timeline/Timeline'
import AppIdeasTimeline from './AppIdeasTimeline';
import BlogTimeline from './BlogTimeline';
import CarouselTimeline from './CarouselTimeline';
import AutoTestingTimeline from './AutoTestingTimeline';
import MeetUpTimeline from './MeetUpTimeline';
import ResolutionTimeline from './ResolutionTimeline';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const Timelines = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CardHeaderCommon title={TimelineTitle} span={timeLineData} />
        <CardBody>
          <VerticalTimeline animate className="cd-container cd-timeline">
            <AppIdeasTimeline />
            <BlogTimeline />
            <CarouselTimeline />
            <AutoTestingTimeline />
            <MeetUpTimeline />
            <ResolutionTimeline />
          </VerticalTimeline>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Timelines