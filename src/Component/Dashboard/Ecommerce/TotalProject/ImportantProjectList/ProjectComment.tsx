import { Image, LI, P, SVG, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { PropsImportantProjectListType } from "../../../../../Types/Dashboard/Ecommerce";

const ProjectComment:React.FC<PropsImportantProjectListType> = ({data}) => {
  return (
    <div className="project-comment">
      <div className="avatar-showcase">
        <div className="avatars">
          <div className="customers d-inline-block avatar-group">
            <UL className="simple-list flex-row d-flex">
                {data.avatarGroup.map((item,i)=>(
                  <LI className="d-inline-block" key={i}>
                    <Image className="img-25 rounded-circle" src={dynamicImage(`user/${item}`)} alt="user" />
                  </LI>
                ))}
              <LI className="d-inline-block">
                <P className="rounded-circle bg-light">+{data.messages} </P>
              </LI>
            </UL>
          </div>
        </div>
      </div>
      <div className="project-comment-icon">
        <div className="project-link">
          <SVG iconId={data.svgIcon} />
          <span>{data.comment} </span>
        </div>
        <div className="project-link">
          <SVG iconId={data.linkIcon} />
          <span>{data.link}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectComment;
