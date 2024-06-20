import { Card, CardBody, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { statusData, statusIndicators } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import { StatusIndicator } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon'

const StatusIndicatorCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CardHeaderCommon title={StatusIndicator} span={statusData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image className="img-100 rounded-circle" src={dynamicImage(`user/1.jpg`)} alt="image" />
              <div className="status bg-success"></div>
            </div>
            {statusIndicators.map(({ className, src,color}, index) => (
              <div className="avatar" key={index}>
                <Image className={`${className} rounded-circle`} src={dynamicImage(`avtar/${src}`)} alt="image" />
                <div className={`status bg-${color}`}></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default StatusIndicatorCart