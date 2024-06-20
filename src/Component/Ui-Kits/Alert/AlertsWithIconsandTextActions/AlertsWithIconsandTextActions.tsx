import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { AlertsWithIconsTextActions, Check } from "../../../../utils/Constant";
import { iconTextData } from "../../../../Data/Ui-Kits/Alert/AlertData";
import { Alerts, Btn, P } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const AlertsWithIconsAndTextActions = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [visibleAlert, setVisibleAlert] = useState<boolean>(true);
  const onDismiss = () => setVisible(false);
  const onDismissAlert = () => setVisibleAlert(false);
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeaderCommon title={AlertsWithIconsTextActions} span={iconTextData}/>
        <CardBody>
          <Alerts color="transparent" fade isOpen={visible} className="border-warning alert-dismissible p-0" >
            <div className="alert-arrow bg-warning">
              <i className="icon-timer"></i>
            </div>
            <P>Your time Over after <strong className="txt-dark">5</strong>minute</P>
            <Btn className="p-0 border-0 me-2 ms-auto" onClick={onDismiss}>
              <span className="bg-warning text-white px-3 py-1">{Check}</span>
            </Btn>
          </Alerts>
          <Alerts color="transparent" fade isOpen={visibleAlert} className="border-danger alert-dismissible p-0 mb-0" >
            <div className="alert-arrow bg-danger">
              <i className="icon-heart"></i>
            </div>
            <P>
              Oh snap! Change a few things up
              <strong className="txt-dark"> Notification check</strong>
            </P>
            <Btn className="p-0 border-0 me-2 ms-auto" onClick={onDismissAlert}>
              <span className="bg-danger text-white px-3 py-1">{'Alert'}</span>
            </Btn>
          </Alerts>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertsWithIconsAndTextActions;
