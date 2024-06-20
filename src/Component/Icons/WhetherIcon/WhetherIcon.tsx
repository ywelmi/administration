import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import { Icons, Weather, WhetherIconsWithAnimations } from "../../../utils/Constant"
import { weatherIconList } from "../../../Data/Icons/WhetherIcon"
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs"
import { H4 } from "../../../AbstractElements"


const WhetherIconContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Weather} parent={Icons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H4 className="m-b-0">{WhetherIconsWithAnimations}</H4>
              </CardHeader>
              <CardBody>
                <Row className="icon-lists whether-icon">
                  {weatherIconList.map((icon, i) => (
                    <Col lg="2" xs="3" key={i}>
                      {icon.icon}
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default WhetherIconContainer