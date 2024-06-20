import { H6, LI, P } from "../../../../AbstractElements";
import { ConferenceWithClient } from "../../../../utils/Constant";

const StaticBasicTimeline = () => {
  const StaticTimeLineText = "At noon today, there will be a meeting with a UK client.";
  return (
    <LI className="d-flex">
      <div className="timeline-dot-primary"></div>
      <div className="w-100 ms-3">
        <P className="d-flex justify-content-between mb-2">
          <span className="date-content light-background txt-dark">2 Feb 2024</span>
          <span>7:00 AM </span>
        </P>
        <H6>
          {ConferenceWithClient}
          <span className="dot-notification"></span>
        </H6>
        <P className="f-light">{StaticTimeLineText}</P>
      </div>
    </LI>
  );
};

export default StaticBasicTimeline;
