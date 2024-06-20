import SweetAlert from "sweetalert2";
import { Card, CardBody, Col } from "reactstrap";
import { DangerAlerts, DangerMode } from "../../../../utils/Constant";
import { dangerMessageData } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const DangerAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      icon: "error",
      title: "It's danger",
      text: "Something went wrong!",
      confirmButtonColor: "var(--theme-default)",
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={DangerAlerts} span={dangerMessageData} />
        <CardBody className="btn-showcase">
          <Btn color="secondary" className="sweet-7" onClick={displayAlert}>
            {DangerMode}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DangerAlert;
