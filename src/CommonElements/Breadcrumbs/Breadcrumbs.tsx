import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import { PropsTypes } from "../../Types/CommonElements/Breadcrumbs";
import H2 from "../Headings/H2Element";

const Breadcrumbs = ({ mainTitle, parent }: PropsTypes) => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <div className="page-title">
        <Row>
          <Col xs="6">
            <H2>{mainTitle}</H2>
          </Col>
          <Col xs="6">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to={"/dashboard"}>
                  {/* <SVG iconId="stroke-home" className="stroke-icon" /> */}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{parent}</BreadcrumbItem>
              <BreadcrumbItem className="active">{mainTitle}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
      <button
        className="p-2 btn-primary mb-3"
        type="button"
        onClick={() => navigate(-1)}
        style={{ borderRadius: "999px", color: "white" }}
      >
        <i className="fa icon-back-left" />
        {/* Quay lại */}
      </button>
    </Container>
  );
};

export default Breadcrumbs;
