import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { Ecommerce, Wishlist } from '../../../../utils/Constant'
import WishlistData from './WishlistData'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const WishListContainer = () => {
  return (
    <>
        <Breadcrumbs mainTitle={Wishlist} parent={Ecommerce} />
        <Container fluid>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeaderCommon title={Wishlist} />
                        <CardBody>
                            <WishlistData />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default WishListContainer