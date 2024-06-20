import { useState } from 'react'
import { Btn } from '../../../../../AbstractElements';
import { JobFilterData } from '../../../../../utils/Constant';
import Filter from './Filter/Filter';
import Location from './Location/Location';
import JobTitleClass from './JobTitleClass/JobTitleClass';
import Industry from './Industry/Industry';
import SkillClass from './SkillClass/SkillClass';

const CardViewSidebar = () => {
  const [filterToggle, setFilterToggle] = useState<boolean>(false);
  const toggle = () => setFilterToggle(!filterToggle);

  return (
    <>
      <Btn color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={toggle}>{JobFilterData}</Btn>
      <div className={`md-sidebar-aside job-sidebar ${filterToggle ? "open" : ""}`}>
        <div className="default-according style-1 faq-accordion job-accordion">
          <Filter />
          <Location />
          <JobTitleClass />
          <Industry />
          <SkillClass />
        </div>
      </div>
    </>
  );
}

export default CardViewSidebar