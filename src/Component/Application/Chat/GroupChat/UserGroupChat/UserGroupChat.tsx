import { Card, Col } from 'reactstrap'
import RightChatBody from '../../PrivateChat/UserChat/RightChatBody'
import RightGroupChatHeader from './RightGroupChatHeader'

const UserGroupChat = () => {
  return (
    <Col xxl="9" xl="8" md="7" className="box-col-7">
      <Card className="right-sidebar-chat">
        <RightGroupChatHeader />
        <RightChatBody />
      </Card>
    </Col>
  )
}

export default UserGroupChat