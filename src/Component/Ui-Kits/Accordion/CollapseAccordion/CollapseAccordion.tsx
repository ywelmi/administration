import { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap';
import { ButtonWithDataBsTarget, CollapseAccordions, LinkWithHref } from '../../../../utils/Constant';
import { Btn, P } from '../../../../AbstractElements';
import { accordionCollapse } from '../../../../Data/Ui-Kits/Accordion/Accordion';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const CollapseAccordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Col md="6" sm="12">
      <Card>
        <CardHeaderCommon title={CollapseAccordions} span={accordionCollapse} />
        <CardBody>
          <P className="common-flex">
            <Btn color="dark" onClick={toggle}>{LinkWithHref}</Btn>
            <Btn color="dark" onClick={toggle}>{ButtonWithDataBsTarget}</Btn>
          </P>
          <Collapse isOpen={isOpen}>
            <Card color="dark" className="mb-0 dark-accordion">
              <CardBody>Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CollapseAccordion