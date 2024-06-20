import { ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import { Dropdown, DropdownLink } from '../../../../utils/Constant'

const StaticNesting = () => {
  return (
    <div className="m-b-30">
      <ButtonGroup>
        <Btn color="primary"><i className="fa fa-bold"></i></Btn>
        <Btn color="secondary"><i className="fa fa fa-italic"></i></Btn>
        <ButtonGroup>
          <UncontrolledDropdown>
            <DropdownToggle caret color="light">{Dropdown}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>{DropdownLink}</DropdownItem>
              <DropdownItem>{DropdownLink}</DropdownItem>
              <DropdownItem>{DropdownLink}</DropdownItem>
              <DropdownItem>{DropdownLink}</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  )
}

export default StaticNesting