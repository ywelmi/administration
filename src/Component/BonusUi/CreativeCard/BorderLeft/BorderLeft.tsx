import { Card, CardBody, Col } from "reactstrap";
import { BorderLefts } from "../../../../utils/Constant";
import { P } from "../../../../AbstractElements";
import { borderLeftData } from "../../../../Data/BonusUi/CreativeCard/CreativeCard";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const BorderLeft = () => {
  const BorderLeftText1 =
    "Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them.";

  return (
    <Col sm="12" md="6">
      <Card>
        <CardHeaderCommon headClass="border-l-primary" title={BorderLefts} span={borderLeftData}/>
        <CardBody>
          <P>
            {BorderLeftText1}
            <br />
            <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United
            States- 33020
            <br />
            <strong>Mail Us:</strong>contact@us@gmail.com
            <br />
            <strong>Contact Number: </strong>(954) 357-7760
          </P>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderLeft;
