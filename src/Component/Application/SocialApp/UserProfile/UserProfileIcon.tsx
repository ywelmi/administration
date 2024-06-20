import { LI, UL } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href } from '../../../../utils/Constant'

const UserProfileIcon = () => {
  return (
    <UL className="share-icons simple-list flex-row">
      <LI>
        <Link className="social-icon bg-primary" to={Href}>
          <i className="fa fa-smile-o me-0" />
        </Link>
      </LI>
      <LI>
        <Link className="social-icon bg-secondary" to={Href}>
          <i className="fa fa-wechat me-0" />
        </Link>
      </LI>
      <LI>
        <Link className="social-icon bg-warning" to={Href}>
          <i className="fa fa-share-alt me-0" />
        </Link>
      </LI>
    </UL>
  )
}

export default UserProfileIcon