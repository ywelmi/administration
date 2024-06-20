import { Table } from "reactstrap";
import { AllTaxesIncluded, BankTransfer, BankAccount, Code, TotalAmount } from "../../../../../utils/Constant";
import { H4 } from "../../../../../AbstractElements";

const InvoiceBankTransfer = () => {
  return (
    <td>
      <Table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", margin: "28px 0", alignItems: "center" }} >
            <td>
              <span style={{ fontSize: 16, fontWeight: 600, opacity: "0.8" }} >
                {BankTransfer}
              </span>
              <H4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 18, color: "#006666" }}>
                Leslie Alexander
              </H4>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400 }} >
                {BankAccount} : 0981234098765
              </span>
              <span style={{ lineHeight: "1.6", fontSize: 18, fontWeight: 400 }} >
                {Code} : LEF098756
              </span>
            </td>
            <td>
              <span style={{ fontSize: 16, fontWeight: 600, opacity: "0.8" }} >
                {TotalAmount}
              </span>
              <H4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 26,  color: "#006666" }} >
                $175.00
              </H4>
              <span style={{ fontSize: 16, fontWeight: 400, lineHeight: "1.5" }}>
                {AllTaxesIncluded}
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceBankTransfer;
