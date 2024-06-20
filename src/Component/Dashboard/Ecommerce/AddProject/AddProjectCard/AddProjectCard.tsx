import { Link } from "react-router-dom";
import { Card, Col } from "reactstrap";
import { AddProject, Href } from "../../../../../utils/Constant";

const AddProjectCard = () => {
  return (
    <Card className="add-project-link">
      <div className="categories"> </div>
      <div className="categories-content">
        <Col xs="8">
          <span className="text-truncate f-12 d-block mb-2">
            Let’s add work to your space
          </span>
        </Col>
        <Link to={Href}>+{AddProject} </Link>
      </div>
    </Card>
  );
};

export default AddProjectCard;
