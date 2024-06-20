//@ts-nocheck
import { useState } from 'react'
import { Accordion, Card, CardBody, Col } from 'reactstrap';
import { FlushAccordions } from '../../../../utils/Constant';
import CommonAccordionItem from '../Common/CommonAccordionItem';
import { flushData, flushList } from '../../../../Data/Ui-Kits/Accordion/Accordion';
import StaticAccordion from './StaticAccordion';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const FlushAccordion = () => {
  const [open, setOpen] = useState<string>("1");
  const toggle = (id) => (open === id ? setOpen() : setOpen(id));
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={FlushAccordions} span={flushData} />
        <CardBody>
          <Accordion flush open={open} toggle={toggle} className="dark-accordion">
            <StaticAccordion/>
            {flushList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FlushAccordion