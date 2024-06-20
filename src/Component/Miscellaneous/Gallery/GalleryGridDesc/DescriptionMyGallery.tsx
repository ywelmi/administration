import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from 'react-router-dom';
import { Href, MyPortfolioTitle } from '../../../../utils/Constant';
import { H4, P } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { galleryGridImages } from '../../../../Data/Miscellaneous/Gallery/Gallery';

const DescriptionMyGallery = () => {
  return (
    <Gallery withCaption>
      {galleryGridImages.map((item, index) => (
        <figure key={index} className="col-xl-3 col-sm-6 m-0" itemProp="caption description">
          <Item original={dynamicImage(item)}  caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." width="802" height="476">
            {({ ref, open }) => (
              <Link to={Href} onClick={open}>
                <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref} src={dynamicImage(item)} alt="thumbnail" />
                <div className="caption border-top-0 p-2">
                  <H4>{MyPortfolioTitle}</H4>
                  <P>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</P>
                </div>
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  )
}

export default DescriptionMyGallery