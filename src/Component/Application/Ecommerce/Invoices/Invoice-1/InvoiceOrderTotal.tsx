import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { getallCardTotal } from "../../../../../Service/Ecommerce.service";
import { Subtotal } from "../../../../../utils/Constant";

const InvoiceOrderTotal = () => {
  const { cart } = useAppSelector((state) => state.cartData);
  return (
    <>
      <td> </td>
      <td> </td>
      <td style={{ padding: "5px 0", paddingTop: 15 }}>
        <span>{Subtotal}</span>
      </td>
      <td style={{padding: "5px 0", textAlign: "right", paddingTop: 15 }} >
        <span>{getallCardTotal(cart)}</span>
      </td>
    </>
  );
};

export default InvoiceOrderTotal;
