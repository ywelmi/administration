import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";

const InvoiceFiveSign = () => {
  return (
    <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" ,marginTop:36}} >
      <td>
        <Image src={dynamicImage("email-template/invoice-3/sign.png")} alt="sign" />
        <span style={{ color: "#000248", display: "block", fontSize: 18, fontWeight: 600 }} >
          Laurine T. Ebbert
        </span>
        <span style={{ display: "block", fontSize: 14, paddingTop: 5 }}>
          ( Designer )
        </span>
      </td>
    </tr>
  );
};

export default InvoiceFiveSign;
