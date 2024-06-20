import { useState } from 'react'
import { Card, Col, Collapse } from 'reactstrap';
import HeaderWithIcon from '../Filter/HeaderWithIcon';
import { AllSkills, SpecificSkills } from '../../../../../../utils/Constant';
import { Btn } from '../../../../../../AbstractElements';
import SkillCheckBox from './SkillCheckBox';

const SkillClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon heading={SpecificSkills} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <SkillCheckBox/>            
          <Btn block className='text-center w-100' color='primary'>{AllSkills}</Btn>
        </Collapse>
      </Card>
    </Col>
  );
}

export default SkillClass