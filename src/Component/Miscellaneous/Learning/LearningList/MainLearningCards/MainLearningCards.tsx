import { Card, Col, Row } from 'reactstrap'
import { H6, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { mainLearningCardData } from '../../../../../Data/Miscellaneous/Learning/Learning';

const MainLearningCards = () => {
  const LearningCardsDetails = "Java is an object-oriented programming language. Sun Microsystems first released Java in the year 1995. It is popularly used for developing Java applications in data centers, laptops, cell phones, game consoles, and scientific supercomputers. There are multiple websites and applications which will not work if Java is not installed.";
  return (
    <>
      {mainLearningCardData.map((data, index) => (
        <Col xl="12" key={index}>
          <Card>
            <Row className="blog-box blog-list ">
              <Col sm="5">
                <Image className="img-fluid sm-100-w" src={dynamicImage(`faq/${index + 1}.jpg`)} alt="blog-image" />
              </Col>
              <Col sm="7">
                <div className="blog-details">
                  <div className="blog-date">
                    <span>{data.dateSpan}</span> {data.date}
                  </div>
                  <H6 className="mb-1">{data.language}</H6>
                  <div className="blog-bottom-content">
                    <UL className="blog-social simple-list flex-row">
                      <LI className="rounded-0">by: {data.learningCardBy}</LI>
                      <LI className="digits">{data.hits} Hits</LI>
                    </UL>
                    <hr />
                    <P className="mt-0">{LearningCardsDetails}</P>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default MainLearningCards