import { FilterPropsType } from '../../../../../Types/Application/SocialApp/SocialApp'
import { CardBody, Collapse } from 'reactstrap'
import { friendsData } from '../../../../../Data/Application/SocialApp/SocialApp'
import { H6, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Href, Photo } from '../../../../../utils/Constant'
import { Link } from 'react-router-dom'

const ActivityFeedCollapse = ({ isFilter }: FilterPropsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {friendsData.map((data, index) => (
          <div className='d-flex' key={index}>
            <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/${data.imageName}`)} alt="user"/>
            <div className='flex-grow-1'>
              <H6>{data.title}</H6>
              <P>{"Commented on Shaun Park's "}
                <Link to={Href}>{Photo}</Link>
              </P>
              <span className="light-span">{data.time} {'Ago'}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  )
}

export default ActivityFeedCollapse