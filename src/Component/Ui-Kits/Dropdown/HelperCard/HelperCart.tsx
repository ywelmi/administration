import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { HelperCards, LearnMore } from '../../../../utils/Constant'
import { H6, LI } from '../../../../AbstractElements'
import { useState } from 'react';

const HelperCart = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret color="secondary" className="text-white">{HelperCards}</DropdownToggle>
        <DropdownMenu className="dropdown-block p-3 dark-form">
          <LI>
            <H6 className="fs-6 fw-bold pb-2">{LearnMore}</H6>
            <DropdownItem className="p-0 helper-truncate">There is a lot of information available here</DropdownItem>
          </LI>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  )
}

export default HelperCart