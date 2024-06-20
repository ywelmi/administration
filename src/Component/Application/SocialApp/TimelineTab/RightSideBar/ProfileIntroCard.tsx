import { useState } from 'react'
import { Card, Col } from 'reactstrap';
import HeaderWithIcon from '../LeftSideBar/HeaderWithIcon';
import { ProfileIntro } from '../../../../../utils/Constant';
import ProfileIntroCollapse from './ProfileIntroCollapse';

const ProfileIntroCard = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Col xl="12" className="xl-50 box-col-12">
        <Card>
          <HeaderWithIcon Heading={ProfileIntro} isOpen={isOpen} setIsOpen={setIsOpen} />
          <ProfileIntroCollapse isFilter={isOpen} />
        </Card>
      </Col>
    );
}

export default ProfileIntroCard