import SweetAlert from "sweetalert2";
import { Card, CardBody, Col } from "reactstrap";
import { InfoAlerts, Informational } from "../../../../utils/Constant";
import { infoSweetAlert } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const InfoAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      text: "Please Click on this button it's big surprise for you.",
      confirmButtonColor: "var(--theme-default)",
    }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({
          text: "Thank you for visit Riho theme : true",
          confirmButtonColor: "var(--theme-default)",
        });
      } else {
        SweetAlert.fire({
          text: "Thank you for visit Riho theme : null",
          confirmButtonColor: "var(--theme-default)",
        });
      }
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={InfoAlerts} span={infoSweetAlert} />
        <CardBody className="btn-showcase">
          <Btn color="info" className="sweet-4" onClick={displayAlert}>
            {Informational}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InfoAlert;
