import { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Primary, RoundedDropdowns } from '../../../../utils/Constant';
import CommonDropDown from '../Common/CommonDropDown';
import { roundedData, roundedList } from '../../../../Data/Ui-Kits/Dropdown/Dropdown';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const RoundedDropdown = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () => setOpen(!open);
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={RoundedDropdowns} span={roundedData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="primary" className="rounded-pill">{Primary}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem>Dark</DropdownItem>
                  <DropdownItem>Light</DropdownItem>
                  <DropdownItem>Lighter</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {roundedList.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RoundedDropdown