import SweetAlert from "sweetalert2";
import { Card, CardBody, Col } from "reactstrap";
import { SweetWarningButton, WarningAlerts } from "../../../../utils/Constant";
import { warningSweetAlert } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const WarningAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      confirmButtonColor: "var(--theme-default)",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({
          icon: "success",
          text: "Poof! Your imaginary file has been deleted!",
          confirmButtonColor: "var(--theme-default)",
        });
      } else if (result.dismiss) {
        SweetAlert.fire({
          text: "Your imaginary file is safe!",
          confirmButtonColor: "var(--theme-default)",
        });
      }
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={WarningAlerts} span={warningSweetAlert} />
        <CardBody className="btn-showcase">
          <Btn color="warning" className="sweet-5" onClick={displayAlert}>
            {SweetWarningButton}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WarningAlert;
