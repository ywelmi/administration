import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { DismissingLightAlert } from '../../../../utils/Constant';
import { Bell } from 'react-feather';
import { Alerts, P } from '../../../../AbstractElements';
import { dismissingLightData } from '../../../../Data/Ui-Kits/Alert/AlertData';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const DismissingLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={DismissingLightAlert} span={dismissingLightData} />
        <CardBody>
          <Alerts fade color="warning" isOpen={visible} toggle={onDismiss}>
            <Bell />
            <P>Hidden content You should check in on some of those fields below.</P>
          </Alerts>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DismissingLightAlerts