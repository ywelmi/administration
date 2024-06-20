import { Card, CardBody, Col } from "reactstrap";
import { Surprise, TitleWithATextUnder } from "../../../../utils/Constant";
import SweetAlert from "sweetalert2";
import { titleSweetAlert } from "../../../../Data/BonusUi/SweetAlert/SweetAlert";
import { Btn } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const TitleWithTextUnder = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      title: "It's Magic!",
      text: "Thank you for visiting Riho theme",
      confirmButtonColor: "var(--theme-default)",
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CardHeaderCommon title={TitleWithATextUnder} span={titleSweetAlert} />
        <CardBody className="btn-showcase">
          <Btn color="secondary" className="sweet-2" onClick={displayAlert}>
            {Surprise}
          </Btn>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TitleWithTextUnder;
