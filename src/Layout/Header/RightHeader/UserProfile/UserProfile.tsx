import { Image, LI, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import ProfileBox from "./ProfileBox";

const UserProfile = () => {
  return (
    <LI className="profile-nav onhover-dropdown">
      <div className="media profile-media">
        <Image className="b-r-10" src={dynamicImage("dashboard/profile.png")} alt="profile"/>
        <div className="media-body d-xxl-block d-none box-col-none">
          <div className="d-flex align-items-center gap-2">
            <span>Alex Mora </span>
            <i className="middle fa fa-angle-down"> </i>
          </div>
          <P className="mb-0 font-roboto">Admin</P>
        </div>
      </div>
      <ProfileBox />
    </LI>
  );
};

export default UserProfile;
