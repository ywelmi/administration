import { Container, Row } from 'reactstrap'
import WorldMap from './WorldMap/WorldMap'
import USAMap from './USAMap/USAMap'
import IndiaMap from './IndiaMap/IndiaMap'
import AustraliaMap from './AustraliaMap/AustraliaMap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { LeafletMap, Maps } from '../../../../utils/Constant'

const LeafletMapsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={LeafletMap} parent={Maps} />
      <Container fluid>
        <Row>
          <WorldMap />
          <USAMap />
          <IndiaMap />
          <AustraliaMap/>
        </Row>
      </Container>
    </>
  )
}

export default LeafletMapsContainer