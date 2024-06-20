import { Col, Container } from 'reactstrap'
import { Btn, H2, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { BackToHomePage } from '../../../../utils/Constant'
import { CommonErrorPageType } from '../../../../Types/OtherPages/OtherPages'

const CommonError: React.FC<CommonErrorPageType> = ({ error, color, src }) => {
  return (
    <div className="page-wrapper compact-wrapper">
      <div className="error-wrapper">
        <Container>
          <Image className="img-100" src={dynamicImage(`other-images/${src}.png`)} alt="otherimg" />
          <div className="error-heading">
            <H2 className={`headline font-${color}`}>{error}</H2>
          </div>
          <Col md="8" className="offset-md-2">
            <P className="sub-content">{"The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."}</P>
          </Col>
          <div>
            <Btn size="lg" tag="a" color={`${color}`} href={`/dashboard/default`}>{BackToHomePage}</Btn>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default CommonError