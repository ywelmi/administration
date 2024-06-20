import { LI, UL } from '../../../../AbstractElements'
import { tourProfileData } from '../../../../Data/Application/Users/UsersProfile/UsersProfile'
import { Link } from 'react-router-dom'
import { SocialMediaIconsPropsTypes } from '../../../../Types/Application/Users/UsersProfile'

const SocialMediaIcons = ({ listClassName }: SocialMediaIconsPropsTypes) => {
  return (
    <UL className={`${listClassName ? listClassName : ""} simple-list flex-row`} >
      {tourProfileData.map((data, index) => (
        <LI key={index}>
          <Link to={data.link}>
            <i className={`fa fa-${data.icon} me-0`}></i>
          </Link>
        </LI>
      ))}
    </UL>
  )
}

export default SocialMediaIcons