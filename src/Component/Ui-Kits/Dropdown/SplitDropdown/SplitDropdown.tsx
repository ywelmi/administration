import { useState } from 'react'
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownToggle } from 'reactstrap';
import { Href, SplitDropdowns, Widgets } from '../../../../utils/Constant';
import { splitData, splitList } from '../../../../Data/Ui-Kits/Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import SplitButtonDropdown from './SplitButtonDropdown';
import { Btn } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const SplitDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <Col sm="12" xl="12">
      <Card>
        <CardHeaderCommon title={SplitDropdowns} span={splitData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <ButtonGroup>
              <Btn color="primary" outline>{Widgets}</Btn>
              <Dropdown className="separated-btn" isOpen={open} toggle={toggle}>
                <DropdownToggle color="primary">
                  <i className="icofont icofont-arrow-down"></i>
                </DropdownToggle>
                <div className="dropdown-content">
                  <Link to={Href}>General</Link>
                  <Link to={Href}>Chart</Link>
                </div>
              </Dropdown>
            </ButtonGroup>
            {splitList.map((data, index) => (
              <SplitButtonDropdown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SplitDropdown