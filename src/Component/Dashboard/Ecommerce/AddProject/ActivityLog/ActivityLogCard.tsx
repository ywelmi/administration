import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { ActivityLogHeading, Href } from "../../../../../utils/Constant";
import { H6, Image, LI, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Link } from "react-router-dom";
import { activityLogCardData } from "../../../../../Data/Dashboard/Ecommerce/Ecommerce";

const ActivityLogCard = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={ActivityLogHeading} mainTitle="Employee" firstItem="All" secondItem="Employee" thirdItem="Client" />
        <CardBody className="pt-0">
          <div className="activity-log-card">
            <UL>
              {activityLogCardData.map((data, i) => (
                <LI className="activity-log" key={i}>
                  <div className="d-flex align-items-start gap-2">
                    <Image className="activity-log-img rounded-circle img-fluid me-2" src={dynamicImage(`user/${data.image}`)} alt="user"/>
                    <div>
                      <div className="common-space user-id">
                        <H6>
                          <Link className="f-w-500 f-12" to={`${process.env.PUBLIC_URL}/users/userprofile`}>{data.userName} </Link>
                        </H6>
                        <span className="f-light f-w-500 f-12">{data.time}</span>
                      </div>
                      <div className="d-flex mb-2">
                        <span className="f-light f-w-500 f-12">{data.activity} :</span>
                        <Link className="f-w-500 f-12" to={Href}>{data.apps}</Link>
                      </div>
                      <span className="f-light f-w-500 f-12 d-block">{data.comment}</span>
                      <Link className="f-12 f-w-500 username" to={Href} />
                    </div>
                  </div>
                </LI>
              ))}
            </UL>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityLogCard;