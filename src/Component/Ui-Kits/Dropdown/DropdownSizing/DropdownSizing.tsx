import { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DropdownSizings, LargeButton } from '../../../../utils/Constant';
import CommonDropDown from '../Common/CommonDropDown';
import { sizingData, sizingList } from '../../../../Data/Ui-Kits/Dropdown/Dropdown';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const DropdownSizing = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={DropdownSizings} span={sizingData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="info" size="lg" className="text-white">{LargeButton}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem>Small button</DropdownItem>
                  <DropdownItem>Medium button</DropdownItem>
                  <DropdownItem>Large button</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Very large button </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {sizingList.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DropdownSizing