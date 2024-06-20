import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { dropMenuData } from "../../../../../Data/Application/LetterBox/LetterBox";
import { LI } from "../../../../../AbstractElements";
import { useState } from "react";

const RightDropDown = () => {
  const [show,setShow] = useState(false)
  const toggle = () => setShow((prevState) => !prevState);
  return (
    <>
    <Dropdown isOpen={show} toggle={toggle}>
      <DropdownToggle color="" className={`light-square`}>
        <i className="fa fa-ellipsis-v" />
      </DropdownToggle>
      <DropdownMenu end className={`dropdown-block`}>
        {dropMenuData.map((data, i) => (
          <LI key={i}>
            <DropdownItem>{data}</DropdownItem>
          </LI>
        ))}
      </DropdownMenu>
    </Dropdown>
    </>
  );
};

export default RightDropDown;
