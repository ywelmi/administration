import { CardBody, Col, Media, Row } from 'reactstrap'
import { H5, H6 } from '../../../AbstractElements'
import { flagIconData } from '../../../Data/Icons/FlagIcons'
import { FlagIconType } from '../../../Types/Icons/IconsTypes'

const FlagIconCardBody:React.FC<FlagIconType> = ({ getITag }) => {
  return (
    <CardBody>
      <Row className="icon-lists flag-icons">
        {flagIconData.map((icon, index) => (
          <Col sm="6" xl="4" xs="12" key={index} onClick={() => getITag(icon.abbrivation)}>
            <Media>
              <i className={`flag-icon flag-icon-${icon.abbrivation}`}></i>
              <Media body>
                <H5 className="text-uppercase">{icon.abbrivation}</H5>
                <H6 className="mt-0">{icon.name}</H6>
              </Media>
            </Media>
          </Col>
        ))}
      </Row>
    </CardBody>
  )
}

export default FlagIconCardBody