import { Card, CardBody, Col } from 'reactstrap'
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletWorldMap } from '../../../../../utils/Constant'
import { usaPosition } from '../../../../../Data/Miscellaneous/Maps/Maps';
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon';

const WorldMap  = () => {
  return (
    <Col sm="6">
      <Card>
        <CardHeaderCommon title={LeafletWorldMap} borderClass={true} />
        <CardBody>
          <MapContainer style={{ height: 389 }} easeLinearity={0.35} attributionControl={true} center={usaPosition} zoom={13} scrollWheelZoom={true} className="z-0 jvector-map-height">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  )
}

export default WorldMap