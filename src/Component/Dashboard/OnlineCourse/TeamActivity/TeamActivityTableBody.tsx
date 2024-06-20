import { Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { teamActivityTableBody } from "../../../../Data/Dashboard/OnlineCourse";

const TeamActivityTableBody = () => {
  return (
    <>
      {teamActivityTableBody.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="team-activity">
              <div className="activity-data d-flex align-items-center gap-3">
                <div className="common-space gap-2 ">
                  <div className="user-activity me-3">
                    <Image className="rounded-circle p-1 img-fluid me-3 img-50" src={dynamicImage(`user/${data.image}`)} alt="user"/>
                    <Link className="f-10 f-w-500 username" to={`${process.env.PUBLIC_URL}/users/useredit`}>{data.name}</Link>
                  </div>
                  <div className="activity-time">
                    <span className="f-light f-w-500 f-10">{data.time}</span>
                  </div>
                </div>
                <div className="subtitle">
                  <P className="f-w-400 f-10">{data.activity}</P>
                </div>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TeamActivityTableBody;
