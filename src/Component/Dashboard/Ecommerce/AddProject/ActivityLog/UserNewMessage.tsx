import { Link } from "react-router-dom";
import { H6, Image, LI } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import CardHeaderDropdown from "../../../../../CommonElements/CommonCardHeader/CardHeaderDropdown";
import { userNewMessageData } from "../../../../../Data/Dashboard/Ecommerce/Ecommerce";

const UserNewMessage = () => {
  return (
    <>
      {userNewMessageData.map((data, i) => (
        <LI key={i}>
          <div className="activity-log">
            <Image className="activity-log-img rounded-circle img-fluid me-2" src={dynamicImage(`user/${data.image}`)} alt="user"/>
            {data.status && <div className="status bg-warning" /> }
            <div className="activity-name">
              <div>
                <H6>
                  <Link className="f-w-500 f-14" to={`${process.env.PUBLIC_URL}/users/userprofile`}>{data.name}</Link>
                </H6>
                <span className="f-light f-w-500 f-12 ">{data.message}</span>
              </div>
              <div className="product-sub">
                <CardHeaderDropdown svgIconId="more-vertical" firstItem="Last Month" secondItem="Last Week" thirdItem="Last Day" />
              </div>
            </div>
          </div>
        </LI>
      ))}
    </>
  );
};

export default UserNewMessage;
