import { Archive, ArrowRight, FileText } from 'react-feather'
import { CardBody, Col, Row } from 'reactstrap'
import { Badges, H6, LI, UL } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href } from '../../../../utils/Constant'
import { knowledgeBaseData } from '../../../../Data/Miscellaneous/KnowledgeBase/KnowledgeBase'

const CategoryDataCardBody = () => {
  return (
    <CardBody>
      <Row className="browse g-sm-4 g-3">
        {knowledgeBaseData.map((data) => (
          <Col xl="4" md="6" key={data.id} className="xl-50">
            <div className="browse-articles">
              <H6>
                <span><Archive className="feather feather-archive" /></span>{data.title}
              </H6>
              <UL className='simple-list'>
                {data.knowledgeList &&
                  data.knowledgeList.map((data, index2) => (
                    <LI key={index2} className="border-0">
                      <Link to={Href}>
                        {data.fileTextIcon ? (<span><FileText /></span>) : (<span><ArrowRight /></span>)}
                        <span>{data.text}</span>
                        {data.badge ? <Badges color="primary" className="pull-right">{data.badge}</Badges> : " "}
                      </Link>
                    </LI>
                  ))}
              </UL>
            </div>
          </Col>
        ))}
      </Row>
    </CardBody>
  )
}

export default CategoryDataCardBody