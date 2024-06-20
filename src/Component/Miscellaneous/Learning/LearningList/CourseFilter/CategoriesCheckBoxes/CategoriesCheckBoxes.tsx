import { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap';
import CommonLearningHeader from '../../Common/CommonLearningHeader';
import { CategoriesTitleLearning } from '../../../../../../utils/Constant';
import DesignCategories from './DesignCategories';
import DevelopmentCategories from './DevelopmentCategories';

const CategoriesCheckBoxes = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
      <Col xl="12">
        <Card>
          <CommonLearningHeader heading={CategoriesTitleLearning} isOpen={isOpen} setIsOpen={setIsOpen}/> 
          <CardBody className='px-0'>
            <Collapse isOpen={isOpen} >
              <DesignCategories />
              <DevelopmentCategories />
            </Collapse>
          </CardBody>
        </Card>
      </Col>
    );
}

export default CategoriesCheckBoxes