import { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { CommonAlignmentProp } from '../../../../Types/Ui-Kits/UiKitsTypes';

const CommonAlignment: React.FC<CommonAlignmentProp> = ({ value }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      <ButtonGroup>
        <Dropdown isOpen={open} toggle={toggle} direction={value.directions}>
          <DropdownToggle caret color={value.btnColor} className="text-white">
            {value.btnText}
          </DropdownToggle>
          <DropdownMenu className="dropdown-block">
            {value.items.map((data, index) => (
              <DropdownItem key={index}>{data.item}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </>
  )
}

export default CommonAlignment