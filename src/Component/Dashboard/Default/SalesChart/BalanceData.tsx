import { LI, UL } from "../../../../AbstractElements";
import { Orders, Revenue } from "../../../../utils/Constant";

const BalanceData = () => {
  return (
    <UL className="balance-data simple-list flex-row">
      <LI>
        <span className="circle bg-warning" />
        <span className="f-light ms-1">{Revenue}</span>
      </LI>
      <LI>
        <span className="circle bg-primary"> </span>
        <span className="f-light ms-1">{Orders}</span>
      </LI>
    </UL>
  );
};

export default BalanceData;
