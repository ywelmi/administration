import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { DropdownLink, DropdownTitle } from '../../../../../utils/Constant'
import { CommonDropDownType } from '../../../../../Types/Buttons/ButtonsTypes';
import { useState } from 'react';

const CommonDropDown:React.FC<CommonDropDownType> = ({color,dark}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <Dropdown className="btn-group" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color={color} caret className={dark ?"text-dark": "text-white"}>{DropdownTitle}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{DropdownLink}</DropdownItem>
        <DropdownItem>{DropdownLink}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default CommonDropDown