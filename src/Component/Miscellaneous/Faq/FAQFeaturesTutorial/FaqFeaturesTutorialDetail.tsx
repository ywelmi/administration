import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Rating } from "react-simple-star-rating";
import FaqProductHover from './FaqProductHover';
import { featuresData } from '../../../../Data/Miscellaneous/Faq/Faq';

const FaqFeaturesTutorialDetail = () => {
  return (
    <>
      {featuresData.map((item, id) => (
        <Col xl="3" md="6" className="box-col-6" key={id}>
          <Card className="features-faq product-box">
            <div className="faq-image product-img">
              <Image alt="feature" className="img-fluid" src={dynamicImage(`${item.img}`)} />
              <FaqProductHover />
            </div>
            <CardBody>
              <H6>{item.title}</H6>
              <P>{item.short_description}</P>
            </CardBody>
            <CardFooter>
              <span>{item.date}</span>
              <Rating fillColor={"var(--theme-default)"} initialValue={Math.random() * 5} size={14} />
            </CardFooter>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default FaqFeaturesTutorialDetail