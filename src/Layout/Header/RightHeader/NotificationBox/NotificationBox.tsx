import { Card, CardBody, CardHeader } from "reactstrap";
import { Badges, H4, LI, SVG } from "../../../../AbstractElements";
import { Notifications } from "../../../../utils/Constant";
import NotificationContent from "./NotificationContent";

const NotificationBox = () => {
  return (
    <LI className="onhover-dropdown notification-down">
      <div className="notification-box">
        <SVG iconId="notification-header" />
        <Badges pill color="secondary">4</Badges>
      </div>
      <div className="onhover-show-div notification-dropdown">
        <Card className="mb-0">
          <CardHeader>
            <div className="common-space">
              <H4 className="text-start f-w-600">{Notifications}</H4>
              <div>
                <span>4 New</span>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <NotificationContent />
          </CardBody>
        </Card>
      </div>
    </LI>
  );
};

export default NotificationBox;
