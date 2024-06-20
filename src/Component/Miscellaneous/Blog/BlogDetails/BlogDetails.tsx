import { Container, Row } from 'reactstrap'
import UserBlog from './UserBlog/UserBlog'
import BlogWithDetails from './BlogWithDetails/BlogWithDetails'
import BlogWithoutDetails from './BlogWithoutDetails/BlogWithoutDetails'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Blog, BlogDetails } from '../../../../utils/Constant'

const BlogDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BlogDetails} parent={Blog} />
      <Container fluid>
        <Row>
          <UserBlog />
          <BlogWithDetails />
          <BlogWithoutDetails />
        </Row>
      </Container>
    </>
  )
}

export default BlogDetailsContainer