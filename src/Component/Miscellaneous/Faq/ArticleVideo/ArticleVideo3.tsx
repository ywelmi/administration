import { Card, CardBody, Col, Media, Row } from 'reactstrap'
import { H6, P } from '../../../../AbstractElements'
import { articleDataThird } from '../../../../Data/Miscellaneous/Faq/Faq'

const ArticleVideo3 = () => {
  return (
    <Col xl="4">
      <Row>
        {articleDataThird.map((item, i) => (
          <Col xl="12" md="6" key={i}>
            <Card>
              <CardBody>
                <Media>
                  {item.iconClass}
                  <Media body>
                    <H6 className="pb-2 f-w-600">{item.title}</H6>
                    <P>{item.description}</P>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  )
}

export default ArticleVideo3