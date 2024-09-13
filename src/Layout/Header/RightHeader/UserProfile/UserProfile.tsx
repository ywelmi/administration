import { LI, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import ProfileBox from "./ProfileBox";

const UserProfile = () => {
  return (
    <LI className="profile-nav onhover-dropdown">
      <div className="media profile-media">
        <img
          className="b-r-10"
          src={dynamicImage("/assets/images/logo_trang.png")}
          alt="image"
        />
        <div className="media-body d-xxl-block d-none box-col-none">
          <div className="d-flex align-items-center gap-2">
            <span style={{ color: "#066" }}>TQ24</span>
            <i className="middle fa fa-angle-down"></i>
          </div>
          <P className="mb-0 font-roboto" style={{ color: "#066" }}>
            Admin
          </P>
        </div>
      </div>
      <ProfileBox />
    </LI>
  );
};

export default UserProfile;
