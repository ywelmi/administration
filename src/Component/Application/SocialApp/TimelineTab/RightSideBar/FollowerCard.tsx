import { useState } from 'react'
import { Card, Col } from 'reactstrap';
import HeaderWithIcon from '../LeftSideBar/HeaderWithIcon';
import { Followers } from '../../../../../utils/Constant';
import FollowerCardCollapse from './FollowerCardCollapse';

const FollowerCard = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Col xl="12" className="xl-50 box-col-12">
        <Card>
          <HeaderWithIcon Heading={Followers} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <FollowerCardCollapse isFilter={isOpen} />
        </Card>
      </Col>
    );
}

export default FollowerCard