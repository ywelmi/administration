import { useState } from 'react'
import { Alerts, P } from '../../../../../AbstractElements';

const AlertsWithIcons = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    return (
      <Alerts color="primary" isOpen={visible} toggle={onDismiss} fade>
        <i className="icofont icofont-heart-alt"></i>
        <P>Good Morning! Start your day with some alerts.</P>
      </Alerts>
    );
}

export default AlertsWithIcons