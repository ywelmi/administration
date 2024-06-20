import { Card, Col, Row } from 'reactstrap'
import CommonProfileHead from '../Common/CommonProfileHead'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import CommonProfileLike from '../Common/CommonProfileLike'

const Profile2 = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonProfileHead activeTime={'10 Hours ago'}/>
          <hr />
          <P className="block-ellipsis">{"Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable."}</P>
          <Row className="g-3 mt-4 pictures mb-4">
            <Col sm="6">
              <div className="tour-blog">
                <Image className="img-fluid rounded" src={dynamicImage("other-images/profile-style-img3.png")} alt="mountain" />
              </div>
            </Col>
            <Col sm="6">
              <div className="tour-blog">
                <Image className="img-fluid rounded" src={dynamicImage("other-images/profile-style-img.png")} alt="sea" />
              </div>
            </Col>
          </Row>
          <CommonProfileLike likeNumber={2559} commentsNumber={569} />
        </div>
      </Card>
    </Col>
  )
}

export default Profile2