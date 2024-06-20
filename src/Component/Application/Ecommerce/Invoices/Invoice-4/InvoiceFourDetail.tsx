import { Table } from "reactstrap";
import { P } from "../../../../../AbstractElements";
import { invoiceFourDetail } from "../../../../../Data/Application/Ecommerce/Invoice";

const InvoiceFourDetail = () => {
  return (
    <td>
      <Table className="table-responsive"  style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }}>
        <tbody>
          <tr>
            {invoiceFourDetail.map((data,i)=>(
              <td style={{ background: "#F5F6F9", padding: "15px 25px"}} key={i}>
                <P style={{ fontSize: 16, fontWeight: 500, color: "#52526C", opacity: "0.8", margin: 0, lineHeight: 2 }}>
                  {data.title} :
                </P>
                <span style={{ fontSize: 18, fontWeight: 600 }}>
                  {data.value}
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceFourDetail;
