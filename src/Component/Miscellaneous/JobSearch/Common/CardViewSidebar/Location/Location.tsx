import { useState } from 'react'
import { Card, CardBody, Col, Collapse } from 'reactstrap';
import HeaderWithIcon from '../Filter/HeaderWithIcon';
import { Btn } from '../../../../../../AbstractElements';
import { AllLocations, LocationHeading } from '../../../../../../utils/Constant';
import LocationCheckBox from './LocationCheckBox';

const Location = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon heading={LocationHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="animate-chk">
            <LocationCheckBox />
          </CardBody>
          <Btn block className="text-center w-100" color="primary">{AllLocations}</Btn>
        </Collapse>
      </Card>
    </Col>
  );
}

export default Location