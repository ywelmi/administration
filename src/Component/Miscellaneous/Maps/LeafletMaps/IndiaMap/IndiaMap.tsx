import { Card, CardBody, Col } from 'reactstrap'
import { LeafletIndiaMap } from '../../../../../utils/Constant'
import { MapContainer, TileLayer } from "react-leaflet";
import { indianMapPosition } from '../../../../../Data/Miscellaneous/Maps/Maps';
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon';

const IndiaMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CardHeaderCommon title={LeafletIndiaMap} borderClass={true} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={5} center={indianMapPosition} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  )
}

export default IndiaMap