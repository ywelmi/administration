import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { Href } from '../../../../utils/Constant'
import { Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const ThirdStyleAboutSection = () => {
  const PainterTourParagraph = "you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
  return (
    <>
      <P className="block-ellipsis">{PainterTourParagraph}</P>
      <Row className="g-3 mt-4 pictures" id="aniimated-thumbnials-2">
        <Col sm="6">
          <Link to={Href}>
            <div className="tour-blog">
              <Image className="img-fluid rounded" src={dynamicImage(`other-images/mountain.jpg`)} alt="mountain" />
            </div>
          </Link>
        </Col>
        <Col sm="6">
          <Link to={Href}>
            <div className="tour-blog">
              <Image className="img-fluid rounded" src={dynamicImage(`other-images/sea.jpg`)} alt="sea" />
            </div>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default ThirdStyleAboutSection