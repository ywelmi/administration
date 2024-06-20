import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Message } from "../../../../../utils/Constant";
import { UL } from "../../../../../AbstractElements";
import UserNewMessage from "./UserNewMessage";

const NewMessage = () => {
  return (
    <Col xl="12" md="6">
      <Card>
        <CardHeaderCommon headClass="card-title-underline" title={Message} subTitle="+ New Message" />
        <CardBody className="pt-0">
          <div className="user-message">
            <UL className="simple-list">
              <UserNewMessage />
            </UL>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewMessage;
