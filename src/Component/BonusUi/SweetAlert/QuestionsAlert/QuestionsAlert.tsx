import SweetAlert from "sweetalert2";
import { Card, CardBody, Col } from "reactstrap";
import { QuestionsAlerts, QuestionsState } from "../../../../utils/Constant";
import { questionAlertData } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const QuestionsAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      text: "Are you sure you want to do this?",
      showCancelButton: true,
      cancelButtonText: "Oh noez!",
      confirmButtonText: "Aww yess!",
      confirmButtonColor: "var(--theme-default)",
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={QuestionsAlerts} span={questionAlertData} />
        <CardBody className="btn-showcase">
          <Btn color="primary" className="sweet-11" onClick={displayAlert}>
            {QuestionsState}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default QuestionsAlert;
