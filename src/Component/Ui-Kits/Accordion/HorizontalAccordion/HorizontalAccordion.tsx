import { useState } from 'react'
import { Card, CardBody, Col, Collapse, Row } from 'reactstrap';
import { HorizontalAccordions, ToggleWidthCollapse } from '../../../../utils/Constant';
import { accordionHorizontal } from '../../../../Data/Ui-Kits/Accordion/Accordion';
import { Btn } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const HorizontalAccordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Col md="6" sm="12">
      <Card>
        <CardHeaderCommon title={HorizontalAccordions} span={accordionHorizontal} />
        <CardBody>
          <div className="common-flex">
            <Btn color="secondary" onClick={toggle}>{ToggleWidthCollapse}</Btn>
          </div>
          <Row>
            <Col sm="5">
              <Collapse isOpen={isOpen} horizontal className="mt-3">
                <Card className="accordion-h-space mb-0">
                  <CardBody>The collapse plugin also supports horizontal collapsing. Add the .collapse-horizontal modifier class to transition the width instead of height and set a width on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our width utilities.</CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default HorizontalAccordion