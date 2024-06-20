import { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Warning, WarningCards } from '../../../../utils/Constant';
import { H6, LI } from '../../../../AbstractElements';

const WarningCard = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => setOpen(!open);
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret color="warning" className="text-white">{WarningCards}</DropdownToggle>
        <DropdownMenu className="dropdown-block p-3 dark-form">
          <LI>
            <H6 className="fs-6 fw-bold pb-2">{Warning}</H6>
            <DropdownItem className="dropdown-item p-0 helper-truncate">Please! Check your notifications.</DropdownItem>
          </LI>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  )
}

export default WarningCard