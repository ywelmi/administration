import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H5, P } from '../../../../AbstractElements'
import { FaqLatestUpdates, Href } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { latestFaqData } from '../../../../Data/Miscellaneous/Faq/Faq'

const LatestUpdate = () => {
  return (
    <Col lg="12">
      <Card>
        <CardHeader className="faq-header card-no-border pb-0">
          <H5 className="d-inline-block">{FaqLatestUpdates}</H5>
          <span className="pull-right d-inline-block">See All</span>
        </CardHeader>
        <CardBody className="faq-body">
          {latestFaqData.map((item, i) => (
            <div className="d-flex updates-faq-main" key={i}>
              <div className="updates-faq">{item.iconClass}</div>
              <div className="flex-grow-1 updates-bottom-time">
                <P>{item.name} <Link to={Href}>{item.val}</Link> {item.title}</P>
                <P>{item.time}</P>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default LatestUpdate