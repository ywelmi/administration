import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Href, ImportantProjectListHeading} from "../../../../../utils/Constant";
import { Badges, Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Link } from "react-router-dom";
import { importantProjectListData } from "../../../../../Data/Dashboard/Ecommerce/Ecommerce";
import ProjectComment from "./ProjectComment";
import ProjectMeeting from "./ProjectMeeting";
import ProjectRangeSlider from "./ProjectRangeSlider";

const ImportantProjectList = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={ImportantProjectListHeading} subTitle="View All"/>
        <CardBody className="pt-0 row important-project">
          {importantProjectListData.map((data, i) => (
            <Col xl="4" md="6" className={`${data.class ? data.class : "box-col-6 "}`} key={i}>
              <div className="projectlist-card">
                <div className="projectlist">
                  <div className="project-data">
                    <Image className="nft-img img-fluid" src={dynamicImage(`dashboard-2/category/${data.image}`)} alt="nft" />
                    <div>
                      <Link className="f-14 f-w-500 d-block" to={`${process.env.PUBLIC_URL}/ecommerce/products`}>{data.title} </Link>
                      <span className="f-light f-12 f-w-500"> Client: {data.client}</span>
                    </div>
                  </div>
                  <Badges pill color={`light-${data.color}`} className="txt-primary">
                    7 Days Left
                  </Badges>
                </div>
                <div className="project-date">
                  <span className="f-light f-12 f-w-500"> {data.startDate}</span>
                  <span className="f-light f-12 f-w-500">{data.endDate} </span>
                </div>
                <ProjectRangeSlider data={data} />
                <ProjectComment data={data} />
                <ProjectMeeting data={data} />
              </div>
            </Col>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImportantProjectList;
