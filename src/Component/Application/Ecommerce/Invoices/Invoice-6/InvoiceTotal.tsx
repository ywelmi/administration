import { H6 } from "../../../../../AbstractElements";
import { Total } from "../../../../../utils/Constant";

const InvoiceTotal = () => {
  return (
    <>
      <td />
      <td />
      <td className="Rate">
        <H6 className="mb-0 p-2">{Total}</H6>
      </td>
      <td className="payment">
        <H6 className="mb-0 p-2">$3,644.25</H6>
      </td>
    </>
  );
};

export default InvoiceTotal;
