import { Card, Col, Container, Row } from 'reactstrap'
import ImageHoverEffectsCardBody from './ImageHoverEffectsCardBody'
import CardHeaderCommon from '../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import { hoverData } from '../../../../Data/Miscellaneous/Gallery/Gallery'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Gallery, ImageHoverEffects } from '../../../../utils/Constant'

const HoverEffectContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ImageHoverEffects} parent={Gallery} />
      <Container fluid>
        {hoverData.map((data, index) => (
          <Row key={index}>
            <Col sm="12">
              <Card>
                <CardHeaderCommon title={`Hover Effect ${data}`} borderClass={true}/>
                <ImageHoverEffectsCardBody data={data} />
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default HoverEffectContainer