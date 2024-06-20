import React from "react";
import { Link } from "react-router-dom";
import { Cancel, Href, PrintInvoice } from "../../../../../utils/Constant";
import { InvoicePrintType } from "../../../../../Types/Application/Ecommerce/Ecommerce";

export const InvoiceButtons: React.FC<InvoicePrintType> = ({ handlePrint }) => {

  return (
    <span style={{display: "flex",justifyContent: "center",gap: 15,}}>
      <Link onClick={handlePrint} style={{background: "#006666",color: "rgba(255, 255, 255, 1)",borderRadius: 10,padding: "18px 27px",fontSize: 16,fontWeight: 600,outline: 0,border: 0,textDecoration: "none",}} to={Href}>
        {PrintInvoice}
        <i className="icon-arrow-right" style={{fontSize: 13,fontWeight: "bold",marginLeft: 10}}/>
      </Link>
      <Link style={{background: "rgba(0, 102, 102, 0.2)",color: "#006666",borderRadius: 10,padding: "18px 27px",fontSize: 16,fontWeight: 600,outline: 0,border: 0,textDecoration: "none",}} to={Href} download>
        {Cancel}
        <i className="icon-arrow-right" style={{fontSize: 13,fontWeight: "bold",marginLeft: 10}}/>
      </Link>
    </span>
  );
};