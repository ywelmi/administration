import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import { Image, SVG } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { topClientTableBodyData } from "../../../../../Data/Dashboard/Ecommerce/Ecommerce";

const TopClientTableBody = () => {
  return (
    <>
      {topClientTableBodyData.map((data, i) => (
        <tr key={i}>
          <td className="client-list">
            <div className="user-id">
              <div className="avatars me-2">
                <div className="avatar">
                  <Image className="img-50 rounded-circle" src={dynamicImage(`user/${data.image}`)} alt="#" />
                  <div className={`status status-dnd bg-${data.color}`}> </div>
                </div>
              </div>
              <div className="product-sub">
                <Link className="f-14 f-w-500 " to={`${process.env.PUBLIC_URL}/users/userprofile`}>{data.name} </Link>
                <span className="d-block f-light f-w-500">{data.country}</span>
              </div>
            </div>
            <div className="user-comment w-100">
              <div className="product-sub">
                <Link className="f-14 f-w-500 " to={`${process.env.PUBLIC_URL}/users/userprofile`}>{data.email}</Link>
                <span className="d-block f-light f-w-500">{data.phoneNumber}</span>
              </div>
              <div className="product-sub">
                <SVG className="invoice-icon" iconId="messages-3" />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TopClientTableBody;
