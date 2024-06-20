import { Gallery, Item } from 'react-photoswipe-gallery';
import { CardBody } from 'reactstrap';
import Masonry from "react-masonry-css";
import { Link } from 'react-router-dom';
import { Href } from '../../../../utils/Constant';
import { dynamicImage } from '../../../../Service';
import { masonryImageData } from '../../../../Data/Miscellaneous/Gallery/Gallery';

const MasonryGalleryBody = () => {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };

  return (
    <CardBody className="photoswipe-pb-responsive me-3">
      <Gallery>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
          {masonryImageData.map((element, index) => (
            <figure key={index} className="m-0">
              <Item original={dynamicImage(element.src)} width="700" height="850">
                {({ ref, open }) => (
                  <Link to={Href} onClick={open}>
                    <img className="img-thumbnail mb-4" ref={ref} src={dynamicImage(element.src)} alt="images" />
                  </Link>
                )}
              </Item>
            </figure>
          ))}
        </Masonry>
      </Gallery>
    </CardBody>
  );
}

export default MasonryGalleryBody