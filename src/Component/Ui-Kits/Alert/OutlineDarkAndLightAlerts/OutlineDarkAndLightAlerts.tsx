import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { OutlineDarkLightAlerts } from '../../../../utils/Constant';
import { Clock, ThumbsUp } from 'react-feather';
import { outLineLightData } from '../../../../Data/Ui-Kits/Alert/AlertData';
import { Alerts, P } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const OutlineDarkAndLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const [visibleAlert, setVisibleAlert] = useState(true);
  const onDismiss = () => setVisible(false);
  const onDismissAlert = () => setVisibleAlert(false);
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={OutlineDarkLightAlerts} span={outLineLightData} />
        <CardBody>
          <Alerts color="transparent" isOpen={visible} toggle={onDismiss} className="txt-primary border-primary">
            <Clock />
            <P>One of <strong>YouTube's </strong> most crucial ranking factors is Watch Time.</P>
          </Alerts>
          <Alerts color="transparent" isOpen={visibleAlert} className="txt-success border-success outline-2x alert-icons" toggle={onDismissAlert}>
            <ThumbsUp />
            <P><b> Well done! </b>You successfully read this important message.</P>
          </Alerts>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineDarkAndLightAlerts