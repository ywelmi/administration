import BalanceData from "./BalanceData";
import CardHeaderDropdown from "../../../../CommonElements/CommonCardHeader/CardHeaderDropdown";
import { LastYear, OnlineStore } from "../../../../utils/Constant";

const SalesChartDropdown = () => {
  return (
    <div className="sales-chart-dropdown">
      <BalanceData />
      <div className="sales-chart-dropdown-select">
        <CardHeaderDropdown headerClass="online-store" mainTitle={OnlineStore} firstItem="All" secondItem="Employee" thirdItem="Client"/>
        <CardHeaderDropdown mainTitle={LastYear} firstItem="Last Month" secondItem="Last Week" thirdItem="Today"/>
      </div>
    </div>
  );
};

export default SalesChartDropdown;
