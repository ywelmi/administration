import { LI } from "../../../../../AbstractElements";
import { Label } from "reactstrap";
import CountUp from 'react-countup';
import { Link } from "react-router-dom";
import { Comments, Href, Like } from "../../../../../utils/Constant";
import { iconListType } from "../../../../../Types/Application/Users/UsersProfile";

const IconList = ({like,endNumber}:iconListType) => {
  return (
    <LI className={`list-inline-item ${like ? "border-right pe-3" : "ms-2"}`} >
      <Label className="m-0">
        <Link to={Href}>
          <i className={like?"fa fa-heart":"fa fa-comment"} />
        </Link>
        {like ? Like : Comments}
      </Label>
      <span className="ms-2 counter">
        <CountUp end={endNumber} duration={5} />
      </span>
    </LI>
  );
};

export default IconList;
