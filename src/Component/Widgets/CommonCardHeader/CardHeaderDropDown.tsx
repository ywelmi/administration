import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { CardHeaderDropDownProps } from "../../../Types/Widgets/CommonCardHeaderType";
const CardHeaderDropDown = ({firstItem , secondItem ,thirdItem ,mainTitle}:CardHeaderDropDownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown className="icon-dropdown" isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle caret color="">{mainTitle} </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end">
        <DropdownItem>
          {firstItem}
        </DropdownItem>
        <DropdownItem>
          {secondItem}
        </DropdownItem>
        <DropdownItem>
          {thirdItem}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CardHeaderDropDown;
