import { Card, CardBody, Col, Media } from 'reactstrap'
import { H5, P } from '../../../../AbstractElements'
import { articleData } from '../../../../Data/Miscellaneous/Faq/Faq'

const Article = () => {
  return (
    <>
      {articleData.map((item) => (
        <Col xl="4" sm={item.sm} className={`"box-col-${item.box}`} key={item.id}>
          <Card className="bg-primary">
            <CardBody>
              <Media className="faq-widgets">
                <Media body>
                  <H5>{item.title}</H5>
                  <P>{item.paragraph}</P>
                </Media>
                {item.icon}
              </Media>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default Article