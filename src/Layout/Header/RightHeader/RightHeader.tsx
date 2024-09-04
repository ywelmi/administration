import { Col } from "reactstrap";
import { UL } from "../../../AbstractElements";
import UserProfile from "./UserProfile/UserProfile";

const RightHeader = () => {
  return (
    <Col
      xl="3"
      xs="3"
      className="nav-right pull-right right-header p-0 ms-auto"
    >
      <UL className="nav-menus simple-list flex-row">
        {/* <ZoomInOut /> */}
        <UserProfile />
      </UL>
    </Col>
  );
};

export default RightHeader;
