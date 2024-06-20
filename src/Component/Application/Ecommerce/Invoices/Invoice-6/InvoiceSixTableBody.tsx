import { P } from "../../../../../AbstractElements";
import { Label } from "reactstrap";
import { invoiceSixData } from "../../../../../Data/Application/Ecommerce/Invoice";

const InvoiceSixTableBody = () => {
  return (
    <>
      {invoiceSixData.map((data,i)=>(
        <tr key={i}>
          <td>
            <Label>{data.title}</Label>
            <P className="m-0">{data.detail}</P>
          </td>
          <td>
            <P className="itemtext">{data.hours}</P>
          </td>
          <td>
            <P className="itemtext">${data.price}</P>
          </td>
          <td>
            <P className="itemtext">${data.total}.00</P>
          </td>
        </tr>
      ))}
      <tr>
        <td>
          <P className="itemtext" />
        </td>
        <td>
          <P className="m-0">HST</P>
        </td>
        <td>
          <P className="m-0">13%</P>
        </td>
        <td>
          <P className="m-0">$419.25</P>
        </td>
      </tr>
    </>
  );
};

export default InvoiceSixTableBody;
