import { Gallery, Item } from 'react-photoswipe-gallery';
import { CardBody } from 'reactstrap';
import { H4, P } from '../../../../AbstractElements';
import { Href, PortfolioTitle } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';
import Masonry from "react-masonry-css";
import { dynamicImage } from '../../../../Service';
import { masonryImageData } from '../../../../Data/Miscellaneous/Gallery/Gallery';

const MasonryGalleryWithDescCardBody = () => {
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1,
      };
    
      return (
        <CardBody className="photoswipe-pb-responsive me-3">
          <Gallery>
            <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery-with-description" columnClassName="grid-item col-xl-3 col-sm-6">
              {masonryImageData.map((element, index) => (
                <li style={{ listStyle: "none" }} key={index} className="p-0">
                  <figure className="m-0">
                    <Item original={dynamicImage(element.src)} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." width="700" height="850">
                      {({ ref, open }) => (
                        <Link to={Href} onClick={open}>
                          <img className="img-thumbnail p-2 rounded-0 rounded-top-1" ref={ref} src={dynamicImage(element.src)} alt="images" />
                          <div className="caption border-top-0 p-2">
                            <H4 className="mt-0">{PortfolioTitle}</H4>
                            <P>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</P>
                          </div>
                        </Link>
                      )}
                    </Item>
                  </figure>
                </li>
              ))}
            </Masonry>
          </Gallery>
        </CardBody>
      );
}

export default MasonryGalleryWithDescCardBody