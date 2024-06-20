import { Card, CardBody, Col } from 'reactstrap'
import { Ratio } from '../../../../utils/Constant'
import { ratioData, ratios } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import CardHeaderCommon from '../../CardHeaderCommon'

const RatioCart = () => {
  return (
    <Col md="6">
      <Card className="height-equal grouping-avatar">
        <CardHeaderCommon title={Ratio} span={ratioData} />
        <CardBody className="avatar-showcase">
          <div className="avatars d-flex align-items-center">
            <div className="avatar ratio">
              <Image className="b-r-8 img-100" src={dynamicImage(`avtar/11.jpg`)} alt="image" />
            </div>
            {ratios.map(({ className, src}, index) => ( 
              <div className="avatar ratio" key={index}> 
                <Image className={`b-r-8 ${className}`} src={dynamicImage(`${src}`)} alt="image" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RatioCart