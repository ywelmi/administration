import { Container, Row } from 'reactstrap'
import Profile from './Profile/Profile'
import MarkProfile from './MarkProfile/MarkProfile'
import Profile2 from './Profile2/Profile2'
import ProfileDetails from './ProfileDetails/ProfileDetails'
import DetailImage from './DetailImage/DetailImage'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Users, UsersProfile } from '../../../../utils/Constant'

const UsersProfileContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={UsersProfile} parent={Users} />
      <Container fluid>
        <div className="user-profile">
          <Row>
            <Profile />
            <MarkProfile />
            <Profile2 />
            <ProfileDetails />
            <DetailImage />
          </Row>
        </div>
      </Container>
    </>
  )
}

export default UsersProfileContainer