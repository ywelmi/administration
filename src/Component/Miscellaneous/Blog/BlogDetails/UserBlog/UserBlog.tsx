import { Card, Col } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import UserBlogDetails from './UserBlogDetails'

const UserBlog = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      <Card>
        <div className="blog-box blog-shadow"> 
          <Image className="img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="blog image" />
          <UserBlogDetails /> 
        </div>
      </Card>
    </Col>
  )
}

export default UserBlog