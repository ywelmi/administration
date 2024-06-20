import SweetAlert from "sweetalert2";
import { Card, CardBody, Col } from "reactstrap";
import { AlertMode, WarningModes } from "../../../../utils/Constant";
import { warningModeData } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const WarningMode = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      icon: "warning",
      title: "Good job!",
      text: "You clicked the button!",
      confirmButtonColor: "var(--theme-default)",
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={WarningModes} span={warningModeData} />
        <CardBody className="btn-showcase">
          <Btn color="warning" className="sweet-6" onClick={displayAlert}>
            {AlertMode}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WarningMode;
