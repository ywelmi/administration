import { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap';
import { FilterLearning, FindCourseLearning } from '../../../../../utils/Constant';
import { Btn } from '../../../../../AbstractElements';
import CommonLearningHeader from '../Common/CommonLearningHeader';
import SearchInput from './SearchInput';
import CategoriesCheckBox from './CategoriesCheckBox';
import DurationCheckBox from './DurationCheckBox';
import PriceCheckBox from './PriceCheckBox';
import StatusCheckBox from './StatusCheckBox';

const CourseCategories = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Col xl="12">
      <Card>
        <CommonLearningHeader heading={FindCourseLearning} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <SearchInput />
            <CategoriesCheckBox />
            <DurationCheckBox />
            <PriceCheckBox />
            <StatusCheckBox />
            <Btn color="primary" className="text-center">{FilterLearning}</Btn>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
}

export default CourseCategories