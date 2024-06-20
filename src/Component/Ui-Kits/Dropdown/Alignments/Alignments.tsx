import { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Alignment, WarningTop } from "../../../../utils/Constant";
import { alignmentData, alignmentList } from "../../../../Data/Ui-Kits/Dropdown/Dropdown";
import CommonAlignment from "./CommonAlignment";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const Alignments = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={Alignment} span={alignmentData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle} direction="up">
                <DropdownToggle caret color="warning" className="text-white">
                  {WarningTop}
                </DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem>Be careful </DropdownItem>
                  <DropdownItem>Notifications</DropdownItem>
                  <DropdownItem>Beware</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {alignmentList.map((data, index) => (
              <CommonAlignment key={index} value={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Alignments;
