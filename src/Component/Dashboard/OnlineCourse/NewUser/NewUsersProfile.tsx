import { H6, Image, LI } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { newUsersProfile } from "../../../../Data/Dashboard/OnlineCourse";
import CardHeaderDropdown from "../../../../CommonElements/CommonCardHeader/CardHeaderDropdown";

const NewUsersProfile = () => {
  return (
    <>
      {newUsersProfile.map((data, i) => (
        <LI key={i}>
          <div className="space-common d-flex user-name">
            <Image className="img-40 rounded-circle img-fluid me-2" src={dynamicImage(`user/${data.image}`)} alt="user"/>
            <div className="common-space w-100">
              <div>
                <H6>
                  <Link className="f-w-500 f-14" to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                    {data.userName}
                  </Link>
                </H6>
                <span className="f-light f-w-500 f-12">{data.country}</span>
              </div>
              <CardHeaderDropdown svgIconId="more-vertical" firstItem="Last Month" secondItem="Last Week" thirdItem="Last Day" />
            </div>
          </div>
        </LI>
      ))}
    </>
  );
};

export default NewUsersProfile;
