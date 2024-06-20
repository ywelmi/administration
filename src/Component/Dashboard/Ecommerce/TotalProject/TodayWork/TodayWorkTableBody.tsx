import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import { todayWorkTableBodyData } from "../../../../../Data/Dashboard/Ecommerce/Ecommerce";
import { Badges } from "../../../../../AbstractElements";

const TodayWorkTableBody = () => {
  return (
    <tbody>
      {todayWorkTableBodyData.map((data, i) => (
        <tr key={i}>
          <td>
            <span className="f-w-500 f-light d-block f-12 mb-1">{data.title}</span>
            <Link className="f-w-500 f-14" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.productName}</Link>
          </td>
          <td>
            <span className="f-w-500 f-light d-block f-12 mb-1">{data.assigned}</span>
            <Link className="f-w-500 f-14" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.name}</Link>
          </td>
          <td>
            <span className="f-w-500 f-light d-block f-12 mb-1">Days Left</span>
            <Link className="f-w-500 f-14" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.days}</Link>
          </td>
          <td className="text-end">
            <Badges pill color={`light-${data.color}`} className={`txt-${data.color === "light" ? "dark" : data.color} product-sub`}>
              <span>{data.badge}</span>
            </Badges>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TodayWorkTableBody;
