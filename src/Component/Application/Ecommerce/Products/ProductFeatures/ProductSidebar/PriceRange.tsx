import Slider from 'react-slick';
import CommonProductSlide from '../Common/CommonProductSlide';
import { productSlide1, productSlide2 } from '../../../../../../Data/Application/Ecommerce/Product';

const PriceRange = () => {
  const settings = {
    slidesToShow: 1,
    swipeToSlide: false,
    arrows: true,
    dots: false,
  };
  return (
    <div className="product-filter pb-0 new-products">
      <div className="owl-carousel owl-theme" id="testimonial">
        <Slider {...settings}>
          <div className="item">
            {productSlide1.map((item, index) => (
              <CommonProductSlide data={item} key={index} />
            ))}
          </div>
          <div className="item">
            {productSlide2.map((item, index) => (
              <CommonProductSlide data={item} key={index} />
            ))}
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default PriceRange