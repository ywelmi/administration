import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { ImagesSizes } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { imageData, imagesDetails } from '../../../../Data/Ui-Kits/HelperClasses/HelperClassesData'

const ImagesSizesCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={ImagesSizes} span={imageData} />
        <CardBody>
          <div className="gradient-border gap-3">
            <Image className="img-30 img-h-30" src={dynamicImage(`blog/comment.jpg`)} alt="img-size" />
            {imagesDetails.map((item, index) => (
              <Image width={item} height={item} className={`img-${item} img-h-${item}`} src={dynamicImage(`blog/comment.jpg`)} alt={`img-size${item}`} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ImagesSizesCart