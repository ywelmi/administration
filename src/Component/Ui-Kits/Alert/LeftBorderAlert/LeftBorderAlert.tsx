import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { LeftBorderAlerts } from '../../../../utils/Constant';
import { HelpCircle } from 'react-feather';
import { Alerts, P } from '../../../../AbstractElements';
import { leftData } from '../../../../Data/Ui-Kits/Alert/AlertData';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const LeftBorderAlert = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const onDismiss = () => setVisible(false);

  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={LeftBorderAlerts} span={leftData} />
        <CardBody className="live-dark">
          <Alerts fade isOpen={visible} color="light-dark" className="text-dark border-left-wrapper" toggle={onDismiss}>
            <HelpCircle />
            <P>You can check in on some of those fields below.</P>
          </Alerts>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LeftBorderAlert