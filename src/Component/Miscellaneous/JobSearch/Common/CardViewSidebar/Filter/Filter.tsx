import { useState } from 'react'
import { Card, CardBody, Collapse } from 'reactstrap';
import { FilterHeading, FindJobs } from '../../../../../../utils/Constant';
import { Btn } from '../../../../../../AbstractElements';
import HeaderWithIcon from './HeaderWithIcon';
import SearchAndMap from './SearchAndMap';
import FilterCheckBox from './FilterCheckBox';

const Filter = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
      <div className="accordion" id="accordionExample">
        <Card>
          <HeaderWithIcon heading={FilterHeading} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Collapse isOpen={isOpen}>
            <CardBody className="filter-cards-view animate-chk">
              <SearchAndMap />
              <FilterCheckBox />
              <Btn className="text-center w-100" color="primary" >{FindJobs}</Btn>
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
}

export default Filter