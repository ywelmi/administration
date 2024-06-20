import { useCallback, useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import IconMarkUp from '../IconMarkUp';
import { fontAwesomeData } from '../../../Data/Icons/FontAwesome';
import FontAwesomeCard from './FontAwesomeCard';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { FontAwesomeIcons, Icons } from '../../../utils/Constant';

const FontAwesomeIconContainer = () => {
    const [iTag, setITag] = useState<string | object>("");
    const [icon, setIcon] = useState<string | object>("");
    const callback = useCallback((tag: string) => {
      setITag({
        iTag: '<i className="fa fa-' + tag + '"></i>',
      });
      setIcon({
        icon: "fa fa-" + tag + " fa-2x",
      });
    }, []);
    return (
      <>
        <Breadcrumbs mainTitle={FontAwesomeIcons} parent={Icons} />
        <Container fluid>
          {fontAwesomeData.map((icons, index) => {
            return (
              <Row key={index}>
                <Col sm="12">
                  <FontAwesomeCard iconType={icons.data} title={icons.title} parentCallback={callback} />
                </Col>
              </Row>
            );
          })}
        </Container>
        <IconMarkUp iTag={iTag} icons={icon} />
      </>
    );
}

export default FontAwesomeIconContainer