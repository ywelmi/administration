import { H6 } from "../../../../../AbstractElements";
import { invoiceSixTable } from "../../../../../Data/Application/Ecommerce/Invoice";

const InvoiceSixTableHeader = () => {
  return (
    <>
      {invoiceSixTable.map((data, i) => (
        <td className="item" key={i}>
          <H6 className="p-2 mb-0">{data}</H6>
        </td>
      ))}
    </>
  );
};

export default InvoiceSixTableHeader;
