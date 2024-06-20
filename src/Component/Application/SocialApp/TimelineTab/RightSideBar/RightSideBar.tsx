import { Card, Col } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import ProfileIntroCard from './ProfileIntroCard'
import FollowerCard from './FollowerCard'
import FollowingsCard from './FollowingsCard'
import LatestPhotos from './LatestPhotos'
import FriendsCard from './FriendsCard'

const RightSideBar = () => {
  return (
    <>
      <ProfileIntroCard />
      <FollowerCard />
      <FollowingsCard />
      <LatestPhotos />
      <FriendsCard />
      <Col xl="12" className="xl-50 box-col-12">
        <Card>
          <Image className="img-fluid" src={dynamicImage('social-app/timeline-4.png')} alt="timeline"/>
        </Card>
      </Col>
    </>
  )
}

export default RightSideBar