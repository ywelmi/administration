import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { NewUserHeading } from "../../../../utils/Constant";
import { UL } from "../../../../AbstractElements";
import NewUsersProfile from "./NewUsersProfile";

const NewUser = () => {
  return (
    <Col xxl="3" sm="6" className="box-col-6">
      <Card className="height-equal">
        <CardHeaderCommon title={NewUserHeading} subTitle="View All" />
        <CardBody className="pt-0">
          <div className="new-user">
            <UL>
              <NewUsersProfile />
            </UL>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewUser;
