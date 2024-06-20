import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { SVG } from "../../../../../AbstractElements";
import { useState } from "react";
import { DropClassTypes } from "../../../../../Types/Application/Chat/PrivateChat";
import { AddToFavorites, SendMessages, ViewDetails } from "../../../../../utils/Constant";

const ContactEdit = ({dropClass}:DropClassTypes) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className={`contact-edit ${dropClass}`}>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="transparent">
          <SVG iconId="menubar" />
        </DropdownToggle>
        <DropdownMenu end={true}>
          <DropdownItem>{ViewDetails}</DropdownItem>
          <DropdownItem>{SendMessages}</DropdownItem>
          <DropdownItem>{AddToFavorites}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ContactEdit;
