import SweetAlert from "sweetalert2";
import { Card, CardBody, Col } from "reactstrap";
import { Username, UsernameAlerts } from "../../../../utils/Constant";
import { usernameAlertData } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const UsernameAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      text: "Please! Submit Your Username :",
      input: "text",
      confirmButtonColor: "var(--theme-default)",
    }).then((result) => {
      if (result.value) {
        SweetAlert.fire({
          text: `Your name is : ${result.value}`,
          confirmButtonColor: "var(--theme-default)",
        });
      } else {
        SweetAlert.fire({
          text: `Your name is : ${result.value}`,
          confirmButtonColor: "var(--theme-default)",
        });
      }
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={UsernameAlerts} span={usernameAlertData} />
        <CardBody className="btn-showcase">
          <Btn color="secondary" className="sweet-13" onClick={displayAlert}>
            {Username}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UsernameAlert;
