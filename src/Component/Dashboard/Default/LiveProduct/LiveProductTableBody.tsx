import { H6, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Input, Label, Media } from "reactstrap";
import CardHeaderDropdown from "../../../../CommonElements/CommonCardHeader/CardHeaderDropdown";
import { liveProductTableBodyData } from "../../../../Data/Dashboard/Default";

const LiveProductTableBody = () => {
  return (
    <tbody>
        {liveProductTableBodyData.map((data,i)=>(
          <tr key={i}>
            <td>
              <div className="product-name">
                <Image className="order-table-images img-fluid" src={dynamicImage(`dashboard/order-table/${data.image}`)} alt="user" /> 
                <div className="product-sub">
                  <Link className="f-14 f-w-600" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.productName}</Link>
                </div>
              </div>
            </td>
            <td>
              <div className="product-sub">
                <Link className="f-14 f-w-500" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.type}</Link>
              </div>
            </td>
            <td>
              <Media>
                <Media body className="text-end switch-sm">
                  <Label className="switch" check>
                    <Input type="checkbox" />
                    <span className="switch-state"> </span>
                  </Label>
                </Media>
              </Media>
            </td>
            <td>
              <H6>1</H6>
            </td>
            <td>
              <CardHeaderDropdown svgIconId="more-horizontal" firstItem="Last Month" secondItem="Last Week" thirdItem="Last Day"/>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default LiveProductTableBody;
