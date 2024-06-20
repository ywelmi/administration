import { Card, CardBody, CardHeader, Col, Input } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import { SearchArticles, SearchArticlesPlaceholder } from '../../../../utils/Constant'
import { HelpCircle, Search } from 'react-feather'

const SearchArticle = () => {
  return (
    <Col lg="12">
      <Card className="card-mb-faq xs-mt-search">
        <CardHeader className="faq-header card-no-border pb-0">
          <H5>{SearchArticles}</H5>
          <HelpCircle />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="faq-form">
            <Input type="text" placeholder={SearchArticlesPlaceholder} />
            <Search className="search-icon" />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SearchArticle