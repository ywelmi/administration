import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { shape, shapeData } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import { Shapes } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'
import CardHeaderCommon from '../../CardHeaderCommon'

const ShapeCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CardHeaderCommon title={Shapes} span={shapeData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image className="img-100 b-r-8" src={dynamicImage(`avtar/4.jpg`)} alt="image" />
            </div>
            {shape.map(({ className, src,size }, index) => (
              <div className="avatar" key={index}>
                <Image className={`${className} b-r-30`} src={dynamicImage(`avtar/${src}`)} alt="image" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ShapeCart