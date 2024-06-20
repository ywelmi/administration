import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import Progressbar from "../../../../../CommonElements/Progressbar";
import { deliveriesTableBodyData } from "../../../../../Data/Widgets/GeneralData";

const DeliveriesTableBody = () => {
  return (
    <tbody>
      {deliveriesTableBodyData.map((data, i) => (
        <tr key={i}>
          <td className="f-w-400 f-10">
            <Link className="line-clamp" to={Href}>
              {data.particular}
            </Link>
          </td>
          <td>
            <div className="progress-value d-flex gap-2 align-items-center">
              <div className="progress">
                <Progressbar bar color="primary" value={data.value} />
              </div>
              <span>{data.value}%</span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default DeliveriesTableBody;
