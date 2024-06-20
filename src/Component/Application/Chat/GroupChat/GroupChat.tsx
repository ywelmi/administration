import { Container, Row } from 'reactstrap'
import LeftSidebar from '../PrivateChat/LeftSidebar/LeftSidebar'
import UserGroupChat from './UserGroupChat/UserGroupChat'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Chat, GroupChat } from '../../../../utils/Constant'

const GroupChatContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GroupChat} parent={Chat} />
      <Container fluid>
        <Row className='g-0'>
          <LeftSidebar />
          <UserGroupChat   />
        </Row>
      </Container>
    </>
  )
}

export default GroupChatContainer