import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { DesignerTitle, Href } from '../../../../../utils/Constant'

const ProfileName = () => {
  return (
    <>
      <Col sm="12" lg="4" className="order-sm-0 order-xl-1">
        <div className="user-designation">
          <div className="title">
            <Link to={Href}>
              {'MARK JECNO'}
            </Link>
          </div>
          <div className="desc">{DesignerTitle}</div>
        </div>
      </Col>
    </>
  )
}

export default ProfileName