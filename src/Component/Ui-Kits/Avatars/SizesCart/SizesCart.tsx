import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Sizes } from '../../../../utils/Constant'
import { sizeData, sizeImages } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import CardHeaderCommon from '../../CardHeaderCommon'

const SizesCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CardHeaderCommon title={Sizes} span={sizeData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image className="img-100 rounded-circle" src={dynamicImage(`avtar/3.jpg`)} alt="image" />
            </div>
            {sizeImages.map((item, index) => (
              <div className="avatar" key={index}>
                <Image className={`${item.className} rounded-circle`} src={dynamicImage(`avtar/${item.src}`)} alt="image" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SizesCart