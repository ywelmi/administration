import SweetAlert from "sweetalert2";
import { Card, CardBody, Col } from "reactstrap";
import { Timer, WarningModes } from "../../../../utils/Constant";
import { autoCloseData } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const AutoCloseTimer = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      timer: 3000,
      showConfirmButton: false,
      title: "Auto close alert!",
      text: "just a wait! I will close in 3 second!",
      confirmButtonColor: "var(--theme-default)",
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={WarningModes} span={autoCloseData} />
        <CardBody className="btn-showcase">
          <Btn color="primary" className="sweet-14" onClick={displayAlert}>
            {Timer}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoCloseTimer;
