import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { H5, Image, SVG } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Link } from 'react-router-dom'
import { Href, Users, UsersCards } from '../../../../utils/Constant'
import { userCardData } from '../../../../Data/Application/Users/UserCards/UserCards'
import SocialMediaIcons from './SocialMediaIcons'
import UserCardsFooter from './UserCardsFooter'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const UserCardsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={UsersCards} parent={Users} />
      <Container fluid>
        <Row className="user-cards-items user-card-wrapper">
          {userCardData.map((item) => (
            <Col xl="4" sm="6" xxl="3" className="col-ed-4 box-col-4" key={item.id}>
              <Card className="social-profile">
                <CardBody>
                  <div className="social-img-wrap">
                    <div className="social-img">
                      <Image src={dynamicImage(item.avatar)} className="img-fluid" alt="user"/>
                    </div>
                    <div className="edit-icon">
                      <SVG iconId="profile-check" />
                    </div>
                  </div>
                  <div className="social-details">
                    <H5 className="mb-1">
                      <Link to={Href}>{item.name}</Link>
                    </H5>
                    <span className="f-light">{item.email}</span>
                    <SocialMediaIcons listClassName="card-social" />
                    <UserCardsFooter item={item} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default UserCardsContainer