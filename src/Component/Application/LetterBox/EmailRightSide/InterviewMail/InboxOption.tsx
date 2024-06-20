import { useState } from "react";
import { SVG } from "../../../../../AbstractElements";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { MailPropsType } from "../../../../../Types/Application/LetterBox/LetterBox";

const InboxOption:React.FC<MailPropsType> = ({handlePrint}) => {
  const [fill,setFill] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="inbox-options">
      <span>Friday 07 Apr (4 hours ago)</span>
      <div className="light-square" onClick={() => setFill(!fill)}>
        <SVG className={`important-mail ${fill ? "active" : ""}`} iconId="mail-star" />
      </div>
      <div className="light-square" onClick={handlePrint}>
        <SVG iconId="print"  />
      </div>
      <div className="light-square btn-group">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="">
            <SVG iconId="menubar" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-block">
            <DropdownItem>
              <i className="fa fa-mail-reply" />
              Reply
            </DropdownItem>
            <DropdownItem>
              <i className="fa fa-mail-forward" />
              Forward
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default InboxOption;
