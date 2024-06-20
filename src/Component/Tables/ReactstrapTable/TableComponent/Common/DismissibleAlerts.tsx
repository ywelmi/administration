import { useState } from 'react'
import { Alerts, P } from '../../../../../AbstractElements';

const DismissibleAlerts = () => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    return (
      <Alerts color="secondary" isOpen={visible} toggle={onDismiss} fade>
        <P>
          <strong>Holy !</strong> You can check in on some of those fields below.
        </P>
      </Alerts>
    );
}

export default DismissibleAlerts