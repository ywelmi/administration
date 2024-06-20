import { Card, Col, Row } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import UserProfileIcon from './UserProfileIcon'
import NavBarMain from './NavBarMain'
import { PropsType } from '../../../../Types/Application/SocialApp/SocialApp'

const UserProfile = ({ callback }: PropsType) => {
  return (
    <Row>
      <Col sm="12" className="box-col-12">
        <Card className="hovercard text-center">
          <div className="cardheader socialheader" />
          <div className="user-image">
            <div className="avatar">
              <Image alt="user" src={dynamicImage('user/1.jpg')} />
            </div>
            <div className="icon-wrapper">
              <i className="icofont icofont-pencil-alt-5" />
            </div>
            <UserProfileIcon />
          </div>
          <div className="info market-tabs p-0">
            <NavBarMain callback={callback} />
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default UserProfile