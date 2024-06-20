import { Col } from 'reactstrap'
import { Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'

const SearchNotFoundClass = () => {
  return (
    <Col sm="12">
      <div>
        <div className="search-not-found text-center p-5">
          <Image src={dynamicImage("search-not-found.png")} alt="image" className="second-search d-inline"/>
          <P className="mb-0">{'Sorry, Not Found Any Contact'}</P>
        </div>
      </div>
    </Col>
  )
}

export default SearchNotFoundClass