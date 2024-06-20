import { Card, Col } from 'reactstrap'
import { Image, P } from '../../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href } from '../../../../../utils/Constant'
import { dynamicImage } from '../../../../../Service'
import CommonProfileHead from '../Common/CommonProfileHead'
import CommonProfileLike from '../Common/CommonProfileLike'

const MarkProfile = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonProfileHead activeTime={'10 Hours ago'} />
          <hr />
          <P>{'Spend time outdoors: Find a nearby park, forest, beach, or any natural setting where you can immerse yourself in nature. Take a walk, go hiking, or simply sit and observe the natural surroundings. Practice mindfulness: Engage in mindful activities that help you connect with nature on a deeper level.'}</P>
          <div className="img-container mb-4">
            <Link to={Href}>
              <Image className="img-fluid rounded" src={dynamicImage('other-images/profile-style-img3.png')} alt="gallery" />
            </Link>
          </div>
          <CommonProfileLike commentsNumber={386} likeNumber={1807} />
        </div>
      </Card>
    </Col>
  )
}

export default MarkProfile