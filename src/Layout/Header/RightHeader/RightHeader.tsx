import { Col } from "reactstrap";
import { UL } from "../../../AbstractElements";
import UserProfile from "./UserProfile/UserProfile";
import ZoomInOut from "./ZoomInOut/ZoomInOut";

const RightHeader = () => {
  return (
    <Col
      xl="7"
      xs="8"
      className="nav-right pull-right right-header p-0 ms-auto"
    >
      <UL className="nav-menus simple-list flex-row">
        <ZoomInOut />
        <UserProfile />
      </UL>
    </Col>
  );
};

export default RightHeader;
