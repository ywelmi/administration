import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { Href } from "../../../utils/Constant";
import { H4, Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";

const LeftHeader = () => {
  return (
    <Col xl="5"  lg="4" md="4" sm="3" className="left-header p-0">
      <div>
        <Link className="toggle-sidebar" to={Href}>
          <i className="iconly-Category"></i>
        </Link>
        <div className="d-flex align-items-center gap-2">
          <H4 className="f-w-600">Welcome Alex</H4>
          <Image className="mt-0" src={dynamicImage("hand.gif")} alt="hand-gif" />
        </div> 
      </div>
      <div className="welcome-content d-xl-block d-none">
        <Col xs="12" className="text-truncate">
          Here’s what’s happening with your store today.
        </Col>
      </div>
    </Col>
  );
};

export default LeftHeader;
