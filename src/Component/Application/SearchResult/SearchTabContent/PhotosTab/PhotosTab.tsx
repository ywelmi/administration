import { Row } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import PagesSort from '../AllTabs/PagesSort'
import GalleryImageDescription from './GalleryImageDescription'

const PhotosTab = () => {
  return (
    <>
      <div>
        <H6 className="mb-2">{'About 12,120 results (0.50 seconds)'}</H6>
        <Row className="my-gallery gallery-with-description">
          <GalleryImageDescription />
        </Row>
      </div>
      <PagesSort />
    </>
  )
}

export default PhotosTab