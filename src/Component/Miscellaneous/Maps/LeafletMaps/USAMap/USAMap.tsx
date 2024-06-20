import { Card, CardBody, Col } from 'reactstrap';
import { LeafletUSAMap } from '../../../../../utils/Constant';
import { MapContainer, TileLayer } from "react-leaflet";
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon';

const USAMap = () => {
    const positionUSA = { lat: 51.505, lng: -0.09 };

    return (
      <Col sm="6">
        <Card>
          <CardHeaderCommon title={LeafletUSAMap} borderClass={true}/>
          <CardBody>
            <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={13} center={positionUSA} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} easeLinearity={0.35}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
          </CardBody>
        </Card>
      </Col>
    );
}

export default USAMap