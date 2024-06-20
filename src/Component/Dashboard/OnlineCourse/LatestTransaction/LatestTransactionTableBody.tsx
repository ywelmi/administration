import { Link } from "react-router-dom";
import { latestTransactionData } from "../../../../Data/Dashboard/OnlineCourse";

const LatestTransactionTableBody = () => {
  return (
    <tbody>
      {latestTransactionData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="product-name">
              <Link className="f-14 f-w-500" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.name}</Link>
            </div>
          </td>
          <td className="f-14 f-w-500">{data.date}</td>
          <td className="f-14 f-w-500">{data.amount}</td>
          <td>
            <div className={`txt-${data.status === "Complete" ? "primary" : "secondary"}`}>
              <span className="f-w-500 f-13">{data.status}</span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default LatestTransactionTableBody;
