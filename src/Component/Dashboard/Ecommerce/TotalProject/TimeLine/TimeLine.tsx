import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { TimeLineHeading } from "../../../../../utils/Constant";
import { onlineTimelineGroup, onlineTimelineItems } from "../../../../../Data/Dashboard/Ecommerce/Ecommerce";
import moment from "moment"
import ReactCalendarTimeline from "react-calendar-timeline";

const EcommerceTimeLine = () => {
  return (
    <Col xl="7" className="box-col-6">
      <Card>
        <CardHeaderCommon title={TimeLineHeading} />
        <CardBody className="pt-0">
          <div className="overflow-auto theme-scrollbar custom-scrollbar">
            <div className="timeline-calendar custom-scrollbar">
              <div className="custom-calendar" id="calendar-container">
                <div className="time-line" id="calendar">
                  <ReactCalendarTimeline
                    groups={onlineTimelineGroup}
                    items={onlineTimelineItems}
                    defaultTimeStart={moment().add(-12, "hour")}
                    defaultTimeEnd={moment().add(12, "hour")}
                 />
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EcommerceTimeLine;
