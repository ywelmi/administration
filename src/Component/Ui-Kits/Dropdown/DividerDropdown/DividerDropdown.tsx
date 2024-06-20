import { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DividerDropdowns, Wishlist } from '../../../../utils/Constant';
import CommonDropDown from '../Common/CommonDropDown';
import { dividerData, dividerSortData } from '../../../../Data/Ui-Kits/Dropdown/Dropdown';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const DividerDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={DividerDropdowns} span={dividerData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="success" className="rounded-pill text-white">{Wishlist}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem>Shoes</DropdownItem>
                  <DropdownItem>Bag</DropdownItem>
                  <DropdownItem>Clothes</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Separated link</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {dividerSortData.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DividerDropdown