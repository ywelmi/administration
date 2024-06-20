import { LI, SVG, UL } from "../../../../../AbstractElements";
import { Website } from "../../../../../utils/Constant";

const InvoiceRightSide = () => {
  return (
    <UL style={{ listStyle: "none", display: "flex", background: "linear-gradient(291deg, #006666 21.2%, #006666 83.92%)", padding: "31px 80px", borderBottomLeftRadius: 100, gap: 28 }} className="flex-row" >
      <LI style={{ display: "flex", alignItems: "center",}}>
        <SVG className="stroke-icon" iconId="call" style={{ height: 14, width: 14, fill: "#fff", marginRight: 10 }} />
        <span style={{ color: "#FFFFFF", fontWeight:500, fontSize:16 }}>(239) 555-0108</span>
      </LI>
      <LI style={{ borderLeft: "1px dashed rgba(255, 255, 255, 0.3)", borderRight: "1px dashed rgba(255, 255, 255, 0.3)", padding: "0 22px", display: "flex", alignItems: "center", }} >
        <SVG className="stroke-icon" style={{ height: 16, width: 16, fill: "#fff", marginRight: 10 }} iconId="email-box" />
        <span style={{ color: "#FFFFFF", fontWeight:500, fontSize:16 }}>Riho@themesforest.com</span>
      </LI>
      <LI style={{ display: "flex", alignItems: "center",}}>
        <SVG className="stroke-icon" style={{ height: 16, width: 16, fill: "#fff", marginRight: 10 }} iconId="web" />
        <span style={{ color: "#FFFFFF", fontWeight:500, fontSize:16 }}>{Website}: www.Rihothemes.com</span>
      </LI>
    </UL>
  );
};

export default InvoiceRightSide;
