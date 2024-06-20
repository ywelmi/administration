import { Card, Col, Row } from 'reactstrap'
import { blogData } from '../../../../../Data/Miscellaneous/Blog/BlogDetails'
import { H6, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'

const BlogWithDetails = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      {blogData.map((data, index) => (
        <Card key={index}>
          <Row className="blog-box blog-list">
            <Col sm="5">
              <Image className="img-fluid sm-100-w" src={dynamicImage(`blog/blog-${data.image}.jpg`)} alt="images"/>
            </Col>
            <Col sm="7">
              <div className="blog-details">
                <div className="blog-date">
                  <span>{data.date}</span> January 2024
                </div>
                <H6>{"Perspiciatis unde omnis iste natus"}</H6>
                <div className="blog-bottom-content">
                  <UL className="blog-social simple-list flex-row">
                    <LI>by: Admin</LI>
                    <LI>{data.hits} Hits</LI>
                  </UL>
                  <hr />
                  <P className="mt-0">A huge part of it is the incomparable beauty you can encounter every day.</P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  )
}

export default BlogWithDetails