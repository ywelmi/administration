import SweetAlert from "sweetalert2";
import { Card, CardBody, Col } from "reactstrap";
import { Pikachu, PikachuAlerts } from "../../../../utils/Constant";
import { pikachuAlertData } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const PikachuAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      text: "A wild Pikachu appeared! What do you want to do?",
      showCancelButton: true,
      cancelButtonText: "Run away!",
      confirmButtonText: "Throw Pokeball!",
      confirmButtonColor: "var(--theme-default)",
      denyButtonText: "Defeat",
      denyButtonColor: "var(--theme-default)",
      showDenyButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({
          icon: "success",
          title: "Yeah!",
          text: "Pikachu was caught!",
          confirmButtonColor: "var(--theme-default)",
        });
      } else if (result.dismiss) {
        SweetAlert.fire({
          text: "Got away safely!",
          confirmButtonColor: "var(--theme-default)",
        });
      } else if (result.isDenied) {
        SweetAlert.fire({
          text: "Pikachu fainted! You gained 500 XP!",
          confirmButtonColor: "var(--theme-default)",
        });
      }
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={PikachuAlerts} span={pikachuAlertData} />
        <CardBody className="btn-showcase">
          <Btn color="warning" className="sweet-12" onClick={displayAlert}>
            {Pikachu}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PikachuAlert;
