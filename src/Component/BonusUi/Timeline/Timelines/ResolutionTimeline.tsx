import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { MyResolutions, MyResolutionsFor2024, Resolutions} from "../../../../utils/Constant";
import { Badges, H5, H6, P } from "../../../../AbstractElements";

const ResolutionTimeline = () => {
  const ResolutionText =
    "I'm determined to streamline, organism, systematism, realign, and embrace life in 2024.";

  return (
    <VerticalTimelineElement
      className="cd-timeline-block"
      date="December 31 2022"
      icon={<i className="icon-agenda"></i>}
      iconClassName="cd-timeline-img cd-movie bg-danger"
    >
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badges color="warning">{Resolutions}</Badges>
        </div>
        <H5 className="f-w-500 m-0">
          {MyResolutionsFor2024}
        </H5>
        <P className="mb-0">{ResolutionText}</P>
        <div className="time-content pt-2">
          <i className="icon-write"></i>
          <H6>{MyResolutions}</H6>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default ResolutionTimeline;
