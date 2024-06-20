import { Card, CardHeader, Col, Row } from 'reactstrap'
import { BrowseArticles, KnowledgeArticle } from '../../../../utils/Constant'
import { H5 } from '../../../../AbstractElements'
import CategoryDataCardBody from './CategoryDataCardBody'

const CategoryData = () => {
  return (
    <Col sm="12">
      <div className="header-faq">
        <H5 className="mb-0">{KnowledgeArticle}</H5>
      </div>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <H5 className="f-w-700">{BrowseArticles}</H5>
            </CardHeader>
            <CategoryDataCardBody />
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export default CategoryData