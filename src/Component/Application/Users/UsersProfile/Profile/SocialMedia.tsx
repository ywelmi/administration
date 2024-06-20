import { Link } from 'react-router-dom'
import { LI, UL } from '../../../../../AbstractElements'
import { tourProfileData } from '../../../../../Data/Application/Users/UsersProfile/UsersProfile'

const SocialMedia = () => {
  return (
    <div className="social-media" >
      <UL className="list-inline simple-list flex-row">
        {tourProfileData.map((item, index) => (
          <LI className="list-inline-item" key={index}>
            <Link to={item.link} target="_blank">
              <i className={`fa fa-${item.icon}`} />
            </Link>
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default SocialMedia