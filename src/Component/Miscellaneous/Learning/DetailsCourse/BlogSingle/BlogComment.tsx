import { Col, Media, Row } from 'reactstrap'
import { H6, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { CommentsType } from '../../../../../Types/Miscellaneous/Learning/Learning'

const BlogComment = (props: { data: CommentsType }) => {
  const {data} = props
  return (
    <>
      <Media className="align-self-center">
        <Image className="align-self-center" src={dynamicImage(data.src)} alt="Generic-placeholder"/>
        <Media body>
          <Row>
            <Col md="4" className='xl-100'>
              <H6 className="mt-0">
                {data.name}
                <span>( {data.post} ) </span>
              </H6>
            </Col>
            <Col md="8" className='xl-100'>
              <UL className="comment-social float-start float-md-end flex-row learning-comment">
                <LI>
                  <i className="icofont icofont-thumbs-up"> </i>{data.hits}
                </LI>
                <LI>
                  <i className="icofont icofont-ui-chat"></i>{data.comments}
                </LI>
              </UL>
            </Col>
          </Row>
          <P>{data.paragraph}</P>
        </Media>
      </Media>
    </>
  )
}

export default BlogComment