import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { Btn, H5 } from '../../../../AbstractElements'
import { AskQuestion, Href, Navigation } from '../../../../utils/Constant'
import { MessageSquare, Settings } from 'react-feather'
import NavigationOption from './NavigationOption'

const AskQuestions = () => {
  return (
    <Col lg="12">
      <Card className="card-mb-faq">
        <CardHeader className="faq-header card-no-border pb-0">
          <H5>{Navigation}</H5>
          <Settings />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="navigation-btn">
            <Btn color="primary" tag="a" href={Href}>
              <MessageSquare className="m-r-10" />
              {AskQuestion}
            </Btn>
          </div>
          <NavigationOption />
        </CardBody>
      </Card>
    </Col>
  )
}

export default AskQuestions