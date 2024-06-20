import { useCallback, useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import { icoIconData } from '../../../Data/Icons/IcoIcons';
import IcoIconCard from './IcoIconCard';
import IconMarkUp from '../IconMarkUp';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { IcoIcon, Icons } from '../../../utils/Constant';

const ICOIconContainer = () => {
    const [iTag, setITag] = useState<string | object>("");
    const [icon, setIcon] = useState<string | object>("");
  
    const callback = useCallback((tag: string) => {
      setITag({
        iTag: '<i className="icofont icofont-' + tag + '"></i>',
      });
      setIcon({
        icon: "icofont icofont-" + tag + " fa-2x",
      });
    }, []);
    return (
      <>
        <Breadcrumbs mainTitle={IcoIcon} parent={Icons} />
        <Container fluid>
          {icoIconData.map((item, i) => {
            return (
              <Row key={i}>
                <Col sm="12">
                  <IcoIconCard iconType={item.icons} title={item.title} parentCallback={callback} />
                </Col>
              </Row>
            );
          })}
        </Container>
        <IconMarkUp iTag={iTag} icons={icon} />
      </>
    );
}

export default ICOIconContainer