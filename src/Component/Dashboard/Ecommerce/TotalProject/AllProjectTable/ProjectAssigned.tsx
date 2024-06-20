import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import { PropsAllProjectTableBodyType } from "../../../../../Types/Dashboard/Ecommerce";

const ProjectAssigned:React.FC<PropsAllProjectTableBodyType> = ({data}) => {
  return (
    <div className="product-sub">
      <Link className="f-w-500 f-14 " to={Href}>
        {data.assigned}
      </Link>
      <span className="f-w-500 f-light f-12 d-block">{data.member}</span>
    </div>
  );
};

export default ProjectAssigned;
