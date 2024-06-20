import { H4, Image, LI, UL } from "../../../../../AbstractElements";
import { invoiceTwoDatas } from "../../../../../Data/Application/Ecommerce/Invoice";
import { dynamicImage } from "../../../../../Service";

const InvoiceTwoData = () => {
  return (
  <>
    {invoiceTwoDatas.map((data,i)=>(
      <tr className="invoice-dark" style={{ backgroundColor: "rgba(245, 246, 249, 1)", boxShadow: "0px 1px 0px 0px rgba(82, 82, 108, 0.15)" }} key={i}>
        <td style={{ padding: "18px 15px", display: "flex", alignItems: "center", gap: 10 }} >
          <span style={{ width: 54, height: 51, backgroundColor: "#F5F6F9", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 5 }} >
            <Image src={dynamicImage(`ecommerce/product-categories/${data.image}.png`)} alt="laptop" style={{ height: 29 }} />
          </span>
          <UL className="simple-list" style={{ padding: 0, margin: 0, listStyle: "none" }}>
            <LI>
              <H4 style={{ fontWeight: 400, margin: "4px 0px", fontSize: 18 }} >
                {data.title}
              </H4>
              <span style={{ opacity: "0.8", fontSize: 14 }}>{data.code}</span>
            </LI>
          </UL>
        </td>
        <td style={{ padding: "18px 15px" }}>
          <span style={{fontSize:18}}>{data.quantity}</span>
        </td>
        <td style={{ padding: "18px 15px", width: "12%" }}>
          <span style={{fontSize:18}}>${data.price}</span>
        </td>
        <td style={{ padding: "18px 15px", width: "12%" }}>
          <span style={{fontSize:18}}>{data.unit}</span>
        </td>
        <td style={{ padding: "18px 15px", width: "10%" }}>
          <span style={{fontSize:18}}>{data.vat}</span>
        </td>
        <td style={{ padding: "18px 15px" }}>
          <span style={{fontSize:18}}>${data.total}</span>
        </td>
      </tr>
    ))}
  </>
  );
};

export default InvoiceTwoData;
