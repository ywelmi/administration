import { Fragment, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { CurrentLocation, MarkerMap } from '../../../../../utils/Constant'
import { GoogleMap, InfoWindow, useJsApiLoader } from '@react-google-maps/api'
import { markerCenter, markerContainerStyle } from '../../../../../Data/Miscellaneous/Maps/Maps'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const MarkerMapComp = () => {
    const [location, setlocation] = useState({
        address: false,
        mapPosition: {
          lat: 18.5204,
          lng: 73.8567,
        },
        markerPosition: {
          lat: 18.5204,
          lng: 73.8567,
        },
      });
    
      const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0",
    });
  return (
    <Fragment>
      <Col lg="6" md="12">
        <Card>
          <CardHeaderCommon title={MarkerMap} borderClass={true}/>
          <CardBody>
            <div className="map-js-height">
              <div id="gmap-simple" className="map-block">
                {isLoaded ? (
                  <GoogleMap mapContainerStyle={markerContainerStyle} center={markerCenter} zoom={10}>
                    {location.address ? (
                      <InfoWindow position={{lat: location.markerPosition.lat + 0.0018,lng: location.markerPosition.lng,}}>
                        <div>
                          <span style={{ padding: 0, margin: 0 }}>{CurrentLocation}</span>
                        </div>
                      </InfoWindow>
                    ) : ""}
                  </GoogleMap>
                ) : "" }
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  )
}

export default MarkerMapComp