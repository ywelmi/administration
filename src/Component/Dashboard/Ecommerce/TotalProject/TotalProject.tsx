import { Col, Row } from "reactstrap";
import TotalProjectCard from "./TotalProjectCard";
import ProjectStatistics from "./ProjectStatistics/ProjectStatistics";
import TodayWork from "./TodayWork/TodayWork";
import ImportantProjectList from "./ImportantProjectList/ImportantProjectList";
import AllProjectTable from "./AllProjectTable/AllProjectTable";
import TopClientList from "./TopClientList/TopClientList";
import EcommerceTimeLine from "./TimeLine/TimeLine";

const TotalProject = () => {
  return (
    <Col xxl="9" className="box-col-12">
      <Row>
        <TotalProjectCard />
        <ProjectStatistics />
        <TodayWork />
        <ImportantProjectList />
        <AllProjectTable />
        <TopClientList />
        <EcommerceTimeLine />
      </Row>
    </Col>
  );
};

export default TotalProject;
