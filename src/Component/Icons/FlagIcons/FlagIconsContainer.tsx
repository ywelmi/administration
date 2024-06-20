import  { useState } from 'react'
import { Card, CardHeader, Col, Container, Row } from 'reactstrap';
import { FlagIcon, Icons } from '../../../utils/Constant';
import FlagIconCardBody from './FlagIconCardBody';
import IconMarkUp from '../IconMarkUp';
import { H4 } from '../../../AbstractElements';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';

const FlagIconsContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const getITag = (tag: string) => {
    setITag({
      iTag: '<i className="flag-icon flag-icon-' + tag + '"></i>',
    });
    setIcon({
      icon: "flag-icon flag-icon-" + tag + " fa-2x",
    });
  };

  return (
    <>
      <Breadcrumbs mainTitle={FlagIcon} parent={Icons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H4 className="m-b-0">{FlagIcon}</H4>
              </CardHeader>
              <FlagIconCardBody getITag={getITag}/>
            </Card>
          </Col>
        </Row>
      </Container>
      <IconMarkUp iTag={iTag} icons={icon} />
    </>
  );
}

export default FlagIconsContainer