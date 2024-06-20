import { Card, CardBody, Col, Form, Input, Label } from "reactstrap";
import { BorderRights, EmailAddress, EmailAddressPlaceHolders } from "../../../../utils/Constant";
import { borderRightData } from "../../../../Data/BonusUi/CreativeCard/CreativeCard";
import { P } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const BorderRight = () => {
  const BorderRightText1 =
    "Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them. .";

  return (
    <Col sm="12" md="6">
      <Card>
        <CardHeaderCommon headClass="border-r-secondary" title={BorderRights} span={borderRightData}/>
        <CardBody>
          <P>{BorderRightText1}</P>
          <Form>
            <Label>{EmailAddress}</Label>
            <Input type="email" placeholder={EmailAddressPlaceHolders} />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderRight;
