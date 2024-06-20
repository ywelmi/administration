import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownToggle } from 'reactstrap'
import { SplitButtonDropdownProp } from '../../../../Types/Ui-Kits/UiKitsTypes';
import { Btn } from '../../../../AbstractElements';

const SplitButtonDropdown:React.FC<SplitButtonDropdownProp> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <ButtonGroup>
      <Btn outline color={item.btnColor}>{item.btnText}</Btn>
      <Dropdown className="separated-btn" isOpen={open} toggle={toggle}>
        <DropdownToggle color={item.btnColor}>
          <i className="icofont icofont-arrow-down"></i>
        </DropdownToggle>
        <div className="dropdown-content">
          {item.items.map((data, index) => (
            <DropdownItem key={index}>{data.item}</DropdownItem>
          ))}
        </div>
      </Dropdown>
    </ButtonGroup>
  )
}

export default SplitButtonDropdown