import { useState } from 'react'
import { Card, Col } from 'reactstrap';
import HeaderWithIcon from '../LeftSideBar/HeaderWithIcon';
import { LatestPhoto } from '../../../../../utils/Constant';
import LatestPhotosCollapse from './LatestPhotosCollapse';

const LatestPhotos = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Col xl="12" className="xl-50 box-col-6">
        <Card>
          <HeaderWithIcon Heading={LatestPhoto} isOpen={isOpen} setIsOpen={setIsOpen}/>
          <LatestPhotosCollapse isFilter={isOpen} />
        </Card>
      </Col>
    );
}

export default LatestPhotos