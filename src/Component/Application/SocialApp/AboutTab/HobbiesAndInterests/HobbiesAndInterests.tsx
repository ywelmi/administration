import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H4, P } from '../../../../../AbstractElements'
import { HobbiesAndInterest } from '../../../../../utils/Constant'
import { MoreVertical } from 'react-feather'
import { hobbiesAndInterestsData } from '../../../../../Data/Application/SocialApp/SocialApp'

const HobbiesAndInterests = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header">
          <H4>
            <span>{HobbiesAndInterest}</span>
            <span className="pull-right"><MoreVertical /></span>
          </H4>
        </CardHeader>
        <CardBody>
          {hobbiesAndInterestsData.map((data, index) => (
            <Row className="details-about" key={index}>
              <Col sm="6">
                <div className="your-details">
                  <span className="f-w-600 mb-2 d-block">{data.heading1}:</span>
                  <P>{data.paragraph1}</P>
                </div>
              </Col>
              <Col sm="6">
                <div className="your-details your-details-xs">
                  <span className="f-w-600 mb-2 d-block">{data.heading2}</span>
                  <P>{data.paragraph2}</P>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default HobbiesAndInterests