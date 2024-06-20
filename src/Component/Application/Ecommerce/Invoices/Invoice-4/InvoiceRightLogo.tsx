import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Email, Phone, Website } from "../../../../../utils/Constant";

const InvoiceRightLogo = () => {
  return (
    <td>
      <Image className="img-fluid for-light" src={dynamicImage("logo/logo_dark.png")} alt="logo" style={{ marginBottom: 14 }} />
      <Image className="img-fluid for-dark" src={dynamicImage("logo/logo.png")} alt="logo" style={{ marginBottom: 14 }} />
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }} >
        2118 Thornridge Cir. Syracuse, Connecticut 35624, United State
      </span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }} >
        {Phone} : (239) 555-0108
      </span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8" }} >
        {Email} : Riho@themesforest.com
      </span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 400, opacity: "0.8"}}>
        {Website}: www.Rihothemes.com
      </span>
    </td>
  );
};

export default InvoiceRightLogo;
