import { Container, Row } from 'reactstrap'
import BasicMap from './BasicMap/BasicMap'
import MarkerMapComp from './MarkerMapComp/MarkerMapComp'
import PolygonsComp from './PolygonsComp/PolygonsComp'
import PolylineMapComp from './PolylineMapComp/PolylineMapComp'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { GoogleMap, Maps } from '../../../../utils/Constant'

const GoogleMapContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GoogleMap} parent={Maps} />
      <Container fluid>
        <Row>
          <BasicMap />
          <MarkerMapComp />
          <PolygonsComp />
          <PolylineMapComp />
        </Row>
      </Container>
    </>
  )
}

export default GoogleMapContainer