import { Gallery, Item } from 'react-photoswipe-gallery'
import { CardBody, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Href } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'
import { hoverImageDataList } from '../../../../Data/Miscellaneous/Gallery/Gallery'

const ImageHoverEffectsCardBody = (props: {data:number}) => {
  return (
    <CardBody>
      <Row className="my-gallery gallery">
        <Gallery>
          {hoverImageDataList &&
            hoverImageDataList.map((item, index) => (
              <figure className={`col-md-3 col-6 m-0 img-hover hover-${props.data}`} key={index}>
                <Item original={dynamicImage(item)} width="1024" height="768">
                  {({ ref, open }) => (
                    <Link to={Href} onClick={open}> 
                      <div className="overflow-hidden">
                        <img ref={ref} src={dynamicImage(item)} alt="images" />
                      </div>
                    </Link>
                  )}
                </Item>
              </figure>
            ))}
        </Gallery>
      </Row>
    </CardBody>
  )
}

export default ImageHoverEffectsCardBody