import { Badges, Image, SVG } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { latestOrdersTableBodyData } from "../../../../Data/Dashboard/Default";

const LatestOrdersTableBody = () => {
  return (
    <tbody>
      {latestOrdersTableBodyData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="product-name">
              <Image className="order-table-images img-fluid" src={dynamicImage(`dashboard/order-table/${data.image}`)} alt="product"/>
              <div className="product-sub">
                <Link className=" f-14 f-w-500 " to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.orderName}</Link>
                <span className="f-light f-14 f-w-500 d-block">
                  ID : {data.orderId}
                </span>
              </div>
            </div>
          </td>
          <td>
            <div className="product-sub">
              <Link className="f-14 f-w-500" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.name}</Link>
              <span className="f-light f-14 f-w-500 d-block">{data.email}</span>
            </div>
          </td>
          <td>
            <div className="product-sub">
              <Link className="f-14 f-w-500" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.amount}</Link>
              <span className="f-light f-14 f-w-500 d-block">{data.paymentDetail}</span>
            </div>
          </td>
          <td>
            <Badges pill color={`light-${data.color}`} className={`txt-${data.color === "light" ? "dark" : data.color} product-sub`}>
              <span>{data.status}</span>
            </Badges>
          </td>
          <td>
            <div className="product-sub">
              <SVG className="invoice-icon" iconId={data.svgIcon} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default LatestOrdersTableBody;
