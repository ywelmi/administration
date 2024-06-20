import { useState } from 'react'
import { Card } from 'reactstrap';
import HeaderWithIcon from './HeaderWithIcon';
import MyProfileClassCollapse from './MyProfileClassCollapse';
import { MyProfile } from '../../../../../utils/Constant';

const MyProfileClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon Heading={MyProfile} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <MyProfileClassCollapse isFilter={isOpen}  />
    </Card>
  )
}

export default MyProfileClass