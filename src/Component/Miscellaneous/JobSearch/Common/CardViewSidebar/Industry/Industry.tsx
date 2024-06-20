import { useState } from 'react'
import { Card, Col, Collapse } from 'reactstrap';
import HeaderWithIcon from '../Filter/HeaderWithIcon';
import { AllIndustries, IndustryHeading } from '../../../../../../utils/Constant';
import { Btn } from '../../../../../../AbstractElements';
import IndustryCheckBox from './IndustryCheckBox';

const Industry = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon heading={IndustryHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <IndustryCheckBox/>
          <Btn block className='w-100 text-center' color='primary'>{AllIndustries}</Btn>
        </Collapse>
      </Card>
    </Col>
  );
}

export default Industry