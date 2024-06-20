import { useState } from 'react'
import { CardBody, Col, Media, Row } from 'reactstrap';
import { featherIconsData } from '../../../Data/Icons/FeatherIcons';
import IconMarkUp from '../IconMarkUp';
import { H6 } from '../../../AbstractElements';

const FeatherIconCardBody = () => {
    const featherIcons = require("feather-icons");
    const [iTag, setITag] = useState<string | object>("");
    const [featherIcon, setFeatherIcon] = useState<string | object>("");
  
    const getItag = (tag: string) => {
      setITag({ iTag: '<i data-feather="' + tag + '"></i>' });
      setFeatherIcon({ featherIcon: tag });
    };
    
    return (
      <CardBody>
        <Row className="icon-lists feather-icons">
          {featherIconsData.map((singleIcon: string, index) => (
            <Col xs="12" sm="6" xl="4" key={index} onClick={() => getItag(singleIcon)}>
              <Media>
                <div
                  dangerouslySetInnerHTML={{
                    __html: featherIcons.icons[singleIcon].toSvg(singleIcon),
                  }}
                />
                <Media body className="align-self-center">
                  <H6 className="mt-0">{singleIcon}</H6>
                </Media>
              </Media>
            </Col>
          ))}
        </Row>
        <IconMarkUp iTag={iTag} icons={featherIcon} />
      </CardBody>
    );
}

export default FeatherIconCardBody