import { CardBody, Collapse } from 'reactstrap'
import { FilterPropsType } from '../../../../../Types/Application/SocialApp/SocialApp'
import { H5, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import MessagesAndNotification from './MessagesAndNotification'
import LikesViewButton from './LikesViewButton'
import { NewLikesThisWeek } from '../../../../../utils/Constant'
import SocialGroup from './SocialGroup'

const MyProfileClassCollapse = ({ isFilter }: FilterPropsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="socialprofile filter-cards-view">
        <div className="d-flex">
          <Image className="img-50 img-fluid m-r-20 rounded-circle" src={dynamicImage('user/1.jpg')} alt="user"/>
          <MessagesAndNotification />
        </div>
        <LikesViewButton />
        <div className="likes-profile text-center">
          <H5>
            <span>
              <i className="fa fa-heart font-danger" /> 884
            </span>
          </H5>
        </div>
        <div className="text-center">35 {NewLikesThisWeek}</div>
        <div className="customers text-center social-group">
          <SocialGroup />
        </div>
        <Image className= "img-fluid mt-5 w-100" alt= "timeline-image" src= {dynamicImage("social-app/timeline-3.png")}  /> 
      </CardBody>
    </Collapse>
  )
}

export default MyProfileClassCollapse