import { Card, CardBody, Col } from 'reactstrap'
import { userContentData } from '../../../../../Data/Application/SocialApp/SocialApp'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import NewUsersSocial from './NewUsersSocial'
import LikeContent from './LikeContent'
import SocialChat from './SocialChat'
import CommentsBox from './CommentsBox'

const NewUserClass = () => {
  return (
    <>
      {userContentData.map((data,index) => (
        <Col sm="12" key={index}>
          <Card>
            <CardBody>
              <NewUsersSocial data={data} />
              <Image className="img-fluid" alt="timeline" src={dynamicImage(data.img)}/>
              <div className="timeline-content">
                <P>{ "The only way to do something in depth is to work hard. I've always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart, body and soul." } </P>
                <LikeContent />
                <SocialChat data={data}/>
                <CommentsBox />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default NewUserClass