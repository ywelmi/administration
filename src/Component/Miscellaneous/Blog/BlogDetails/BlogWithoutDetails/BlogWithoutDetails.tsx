import { Image } from '../../../../../AbstractElements'
import { blogDataList } from '../../../../../Data/Miscellaneous/Blog/BlogDetails'
import { Card, Col } from 'reactstrap'
import { dynamicImage } from '../../../../../Service'
import ListOfBlogWithoutDetails from './ListOfBlogWithoutDetails'

const BlogWithoutDetails = () => {
  return (
    <>
      {blogDataList.map((data, index) => (
        <Col md="6" xxl="3" className="box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <Image className="img-fluid top-radius-blog" src={dynamicImage(`blog/${data}`)} alt="blog" />
              <ListOfBlogWithoutDetails />
            </div>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default BlogWithoutDetails