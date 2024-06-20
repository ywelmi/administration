import { Card, CardBody, Col, Media, Row } from 'reactstrap'
import { H6, P } from '../../../../AbstractElements'
import { articleDataOne } from '../../../../Data/Miscellaneous/Faq/Faq'

const ArticleVideo1 = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        {articleDataOne.map((item, i) => (
          <Col sm="12" key={i}>
            <Card>
              <CardBody>
                <Media>
                  {item.iconClass}
                  <Media body>
                    <H6 className="f-w-600 mb-2">{item.title}</H6>
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

export default ArticleVideo1