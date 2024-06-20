import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import { PropsAllProjectTableBodyType } from "../../../../../Types/Dashboard/Ecommerce";

const ProjectDate:React.FC<PropsAllProjectTableBodyType> = ({data}) => {
  return (
    <div className="product-sub">
      <Link className="f-w-500 f-14" to={Href}>
        {data.endDate}
      </Link>
      <span className="f-w-500 f-light f-12 d-block">{data.days}</span>
    </div>
  );
};

export default ProjectDate;
