//@ts-nocheck
import { useState } from 'react'
import { Accordion, Card, CardBody, Col } from 'reactstrap';
import { SimpleAccordions } from '../../../../utils/Constant';
import { accordionData, accordionList } from '../../../../Data/Ui-Kits/Accordion/Accordion';
import StaticAccordion from './StaticAccordion';
import CommonAccordionItem from '../Common/CommonAccordionItem';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const SimpleAccordion = () => {
  const [open, setOpen] = useState<string>("1");
  const toggle = (id) => (open === id ? setOpen() : setOpen(id));
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={SimpleAccordions} span={accordionData} />
        <CardBody>
          <Accordion open={open} toggle={toggle} className="dark-accordion">  
            <StaticAccordion />
            {accordionList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SimpleAccordion