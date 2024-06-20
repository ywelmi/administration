import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { CardHeaderDropDownProps } from "../../Types/CommonElements/CommonCardHeader";
import SVG from "../SVG";

const CardHeaderDropdown = ({mainTitle,firstItem,secondItem,thirdItem,headerClass,svgIconId}:CardHeaderDropDownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className={`card-header-right-icon ${headerClass}`}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret={mainTitle ? true : false} className="dropdown-toggle-store" color="">
          {mainTitle ? mainTitle : <SVG className="invoice-icon" iconId={svgIconId} />}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end" >
          <DropdownItem>{firstItem} </DropdownItem>
          <DropdownItem>{secondItem}</DropdownItem>
          <DropdownItem>{thirdItem} </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CardHeaderDropdown;
