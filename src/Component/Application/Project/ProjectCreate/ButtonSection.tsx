import { Col, Row } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Add, Cancel } from "../../../../utils/Constant";
import { Link } from "react-router-dom";

const ButtonSection = () => {
  return (
    <Row>
      <Col>
        <div className="text-end">
          <Btn color="success" className="me-3">{Add}</Btn>
          <Link to={`/project/projectlist`}>
            <Btn color="danger">{Cancel}</Btn>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default ButtonSection;

