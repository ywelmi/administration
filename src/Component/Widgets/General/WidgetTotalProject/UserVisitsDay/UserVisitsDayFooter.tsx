import { Link } from "react-router-dom";
import { CardFooter } from "reactstrap";
import { Href } from "../../../../../utils/Constant";
import { SVG } from "../../../../../AbstractElements";

const UserVisitsDayFooter = () => {
  return (
    <CardFooter className="p-0">
      <div className="common-space px-3 py-2">
        <div>
          <Link className="f-w-600 f-10" to={Href}>
            Most Visited Day
          </Link>
          <span className="f-light f-w-400 f-10 d-block">
            Total 59.6k visits on Sunday
          </span>
        </div>
        <div className="visited-dropdown">
          <SVG iconId="arrow-down" className="mb-0" />
        </div>
      </div>
    </CardFooter>
  );
};

export default UserVisitsDayFooter;
