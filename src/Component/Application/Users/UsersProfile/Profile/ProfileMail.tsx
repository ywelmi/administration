import { Col, Row } from 'reactstrap'
import { userProfileData } from '../../../../../Data/Application/Users/UsersProfile/UsersProfile'
import { H6 } from '../../../../../AbstractElements'

const ProfileMail = () => {
  return (
    <Col sm="6" lg="4" className="order-sm-1 order-xl-0">
      <Row>
        {userProfileData.slice(0,2).map((data,i)=>(
          <Col md="6" key={i}>
            <div className="ttl-info text-start">
              <H6>
                <i className={`fa fa-${data.icon}`} /> {data.title}
              </H6>
              <span>{data.detail}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Col>
  )
}

export default ProfileMail