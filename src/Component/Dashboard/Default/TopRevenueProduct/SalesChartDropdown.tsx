import { salesChartDropdownData } from "../../../../Data/dashboard";
import { LI, UL } from "../../../../AbstractElements";

const SalesChartDropdown = () => {
  return (
    <UL className="balance-data flex-wrap flex simple-list">
      {salesChartDropdownData.map((data, i) => (
        <LI key={i}>
          <span className={`circle bg-${data.color}`} />
          <span className="f-light ms-1">{data.title}</span>
        </LI>
      ))}
    </UL>
  );
};

export default SalesChartDropdown;
