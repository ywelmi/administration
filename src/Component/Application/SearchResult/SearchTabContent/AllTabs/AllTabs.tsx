import { Col, Row } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { SearchPixelStrap } from '../../../../../utils/Constant'
import { searchTabsData } from '../../../../../Data/Application/SearchResult/SearchResult'
import InformationCommon from './InformationCommon'
import SearchBanner from './SearchBanner'
import PagesSort from './PagesSort'

const AllTabs = () => {
  return (
    <Row>
      <Col xxl="8" xl="6" className="box-col-12">
        <H6 className="mb-2">{SearchPixelStrap}</H6>
        {searchTabsData.map((item, i) => (
          <InformationCommon item={item} key={i} />
        ))}
      </Col>
      <SearchBanner />
      <PagesSort />
    </Row>
  )
}

export default AllTabs