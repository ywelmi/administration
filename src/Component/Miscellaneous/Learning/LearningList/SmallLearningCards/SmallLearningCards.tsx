import { Card, Col } from 'reactstrap'
import { Image, LI, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import BlogDetails from './BlogDetails'
import { imagePaths } from '../../../../../Data/Miscellaneous/Learning/Learning'

const SmallLearningCards = () => {
  return (
    <>
      {imagePaths.map((data, index) => (
        <Col xl="4" sm="6" className="xl-50 box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center product-box">
              <div className="product-img">
                <Image className="img-fluid top-radius-blog" src={dynamicImage(`faq/${data.src}.jpg`)} alt="faq" />
                <div className="product-hover">
                  <UL className='simple-list flex-row'>
                    <LI><i className="icon-link" /></LI>
                    <LI><i className="icon-import" /></LI>
                  </UL>
                </div>
              </div>
              <BlogDetails text={data.text} />
            </div>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default SmallLearningCards