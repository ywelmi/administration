import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { MeetUpTimelineTitle, PleaseMeetUp, WebDesignersMeeUp} from "../../../../utils/Constant";
import { Badges, H5, H6, P } from "../../../../AbstractElements";

const MeetUpTimeline = () => {
  const MeetUpText =
    "Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools.";

  return (
    <VerticalTimelineElement
      className="cd-timeline-block"
      date="November 04 2022"
      icon={<i className="icon-pin-alt"></i>}
      iconClassName="cd-timeline-img cd-location bg-secondary"
    >
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badges color="success">{MeetUpTimelineTitle}</Badges>
        </div>
        <H5 className="f-w-500 m-0">
          {WebDesignersMeeUp}
        </H5>
        <P className="mb-0">{MeetUpText}</P>
        <div className="time-content pt-2">
          <i className="icon-android"></i>
          <H6>{PleaseMeetUp}</H6>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default MeetUpTimeline;
