import { CardHeader } from "reactstrap";
import H4 from "../Headings/H4Element";
import { Link } from "react-router-dom";
import { CardHeaderCommonType } from "../../Types/CommonElements/CommonCardHeader";
import CardHeaderDropdown from "./CardHeaderDropdown";

const CardHeaderCommon = ({title,subTitle,headClass,mainTitle,firstItem,secondItem,thirdItem,headerClass,borderClass}:CardHeaderCommonType) => {
  return (
    <CardHeader className={`${headClass} total-revenue ${!borderClass === true ? "card-no-border" : ""} `}>
      <H4>{title}</H4>
      {subTitle && <Link to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{subTitle}</Link> }
      {mainTitle &&
      <div className="sales-chart-dropdown-select">
        <CardHeaderDropdown mainTitle={mainTitle} firstItem={firstItem} secondItem={secondItem} thirdItem={thirdItem} headerClass={headerClass} />
      </div>}
    </CardHeader>
  );
};

export default CardHeaderCommon;
