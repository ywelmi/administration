import { Link } from 'react-router-dom'
import { H5, Image, P } from '../../../../AbstractElements'
import { Href, PainterTourTitle, ReadMoreTour, WilliamJennings, WonderFullTour } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'

const SecondStyleAboutSection = () => {
  const PainterTour = " Is most renowned for his expressive colorization, creative landscapes, and stormy, sometimes violent maritime works. However, this moody image of the Devil's Bridge in Switzerland, close to the Gotthard Pass, feels incredibly authentic and accurately depicts historical occasions when Russian general Suvorov crossed the Alps and fought not only far larger enemy troops!"
  const PainterTourSpan = "The curved canvas is enclosed in a complex frame that the artist created but that his buddy Gottlieb Christian Kuhn carved. A variety of Christian symbols are depicted on the frame, including the faces of five infant angels, a star, grapes, vines, corn, and God's eye.Many of the Romantic elements and subjects that he would explore throughout his career are present in this work, one of his earliest, most notable of which is the landscape's significant significance. In spite of the altarpiece's inclusion of a crucifix, the emphasis is"
  return (
    <>
      <H5 className="pb-3">{WonderFullTour}</H5>
      <P className="block-ellipsis">
        {PainterTourTitle}<em className="txt-danger">{WilliamJennings}</em>{PainterTour}
      </P>
      <div className="img-container">
        <div id="aniimated-thumbnials">
          <Link to={Href}>
            <Image className="img-fluid rounded" src={dynamicImage(`other-images/profile-style-img3.png`)} alt="gallery" />
          </Link>
          <P className="block-ellipsis pt-3">
            {PainterTourSpan}
            <Link className="txt-danger ms-1" to={Href}>{ReadMoreTour}</Link>
          </P>
        </div>
      </div>
    </>
  )
}

export default SecondStyleAboutSection