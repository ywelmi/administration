import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import { PropsImportantProjectListType } from "../../../../../Types/Dashboard/Ecommerce";

const ProjectMeeting:React.FC<PropsImportantProjectListType> = ({data}) => {
  return (
    <div className="project-meeting-details">
      <div className="project-meeting">
        <span className="f-light f-12 f-w-500">Last Meeting</span>
        <span className="f-light f-12 f-w-500">Next Meeting </span>
      </div>
      <div className="project-meeting-time">
        <Link className="f-14 f-w-500 " to={Href}>
          {data.lastMeeting}
        </Link>
        <Link className="f-14 f-w-500" to={Href}>
          {data.nextMeeting}
        </Link>
      </div>
    </div>
  );
};

export default ProjectMeeting;
