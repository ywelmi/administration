import { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { AlertCards, Danger } from '../../../../utils/Constant'
import { H6, LI } from '../../../../AbstractElements';

const AlertCard = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret color="info" className="text-white">{AlertCards}</DropdownToggle>
        <DropdownMenu className="dropdown-block p-3 dark-form">
          <LI>
            <H6 className="fs-6 fw-bold pb-2">{Danger}</H6>
            <DropdownItem className="p-0 helper-truncate">It's a danger path.</DropdownItem>
          </LI>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  )
}

export default AlertCard