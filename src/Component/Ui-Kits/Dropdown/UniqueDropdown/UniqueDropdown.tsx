import { useState } from 'react'
import { Card, CardBody, Col, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Text, UniqueDropdownHeading } from '../../../../utils/Constant';
import { P } from '../../../../AbstractElements';
import { uniqueData } from '../../../../Data/Ui-Kits/Dropdown/Dropdown';
import DropdownForm from './DropdownForm';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const UniqueDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <Col sm="6">
      <Card>
        <CardHeaderCommon title={UniqueDropdownHeading} span={uniqueData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <DropdownForm />
            <Dropdown isOpen={open} toggle={toggle}>
              <DropdownToggle caret color="dark" className="text-white">{Text}</DropdownToggle>
              <DropdownMenu className="p-4 text-muted form-wrapper">
                <P>Some example text that&apos;s free-flowing within the dropdown menu.</P>
                <P className="mb-0">And this is more example text. </P>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default UniqueDropdown