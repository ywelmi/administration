import { Card, CardBody, Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
  return (
    <Col xxl="4" md="6" className="box-col-12">
      <Card>
        <CardBody>
          <Carousel
            className="owl-carousel owl-theme"
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            swipeable={true}
            autoPlay={true}
          >
            <div className="item">
              <img src="../assets/images/ecommerce/01.jpg" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/02.jpg" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/03.jpg" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/04.jpg" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/05.jpg" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/06.jpg" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/07.jpg" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/08.jpg" />
            </div>
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageSlider;
