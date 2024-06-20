import { useCallback, useState } from 'react'
import { Container, Row } from 'reactstrap';
import { themifyIconData } from '../../../Data/Icons/ThemifyIcon';
import IconMarkUp from '../IconMarkUp';
import ThemifyIconCard from './ThemifyIconCard';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Icons, ThemifyIcon } from '../../../utils/Constant';

const ThemifyIconsContainer = () => {
    const [iTag, setITag] = useState<string | object>("");
    const [icon, setIcon] = useState<string | object>("");
  
    const callback = useCallback((tag: string) => {
      setITag({
        iTag: '<i className="'+ tag + '"></i>',
      });
      setIcon({
        icon: "" + tag + " fa-2x",
      });
    }, []);
    return (
      <>
        <Breadcrumbs mainTitle={ThemifyIcon} parent={Icons} />
        <Container fluid>
          {themifyIconData.map((item, i) => {
            return (
              <Row key={i}>
                <ThemifyIconCard iconType={item.data} title={item.title} parentCallback={callback} />
              </Row>
            );
          })}
        </Container>
        <IconMarkUp iTag={iTag} icons={icon} />
      </>
    );
}

export default ThemifyIconsContainer