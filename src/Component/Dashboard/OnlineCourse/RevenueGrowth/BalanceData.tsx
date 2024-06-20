import { LI, UL } from "../../../../AbstractElements";
import { MarketingSale, OnlineSale } from "../../../../utils/Constant";

const BalanceData = () => {
  return (
    <UL className="balance-data flex-row">
      <LI>
        <span className="circle bg-warning"> </span>
        <span className="ms-1 f-w-400">{MarketingSale}</span>
      </LI>
      <LI>
        <span className="circle bg-primary"> </span>
        <span className="ms-1 f-w-400">{OnlineSale}</span>
      </LI>
    </UL>
  );
};

export default BalanceData;
