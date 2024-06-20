import { Col } from "reactstrap";
import AddProjectCard from "./AddProjectCard/AddProjectCard";
import ActivityLog from "./ActivityLog/ActivityLog";

const AddProject = () => {
  return (
    <Col xxl="3" className="d-xxl-block d-none activity-group box-col-none">
      <AddProjectCard />
      <ActivityLog />
    </Col>
  );
};

export default AddProject;
