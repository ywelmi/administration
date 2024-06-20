import { Card } from 'reactstrap'
import { ActivityFeed } from '../../../../../utils/Constant'
import { useState } from 'react';
import HeaderWithIcon from './HeaderWithIcon';
import ActivityFeedCollapse from './ActivityFeedCollapse';

const ActivityFeedClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon Heading={ActivityFeed} isOpen={isOpen} setIsOpen={setIsOpen} />
      <ActivityFeedCollapse isFilter={isOpen}/>
    </Card>
  )
}

export default ActivityFeedClass