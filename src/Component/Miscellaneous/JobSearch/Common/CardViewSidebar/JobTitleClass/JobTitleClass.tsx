import { useState } from "react";
import { Card, Col, Collapse } from "reactstrap";
import HeaderWithIcon from "../Filter/HeaderWithIcon";
import { Btn } from "../../../../../../AbstractElements";
import { AllJobTitle, JobHeading } from "../../../../../../utils/Constant";
import JobTitleCheckBox from "./JobTitleCheckBox";

const JobTitleClass = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon
          heading={JobHeading}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Collapse isOpen={isOpen}>
          <JobTitleCheckBox />
          <Btn block className="text-center w-100" color="primary">
            {AllJobTitle}
          </Btn>
        </Collapse>
      </Card>
    </Col>
  );
};

export default JobTitleClass;
