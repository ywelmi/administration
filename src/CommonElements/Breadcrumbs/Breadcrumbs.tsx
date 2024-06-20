import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import SVG from "../SVG";
import { PropsTypes } from "../../Types/CommonElements/Breadcrumbs";
import H4 from "../Headings/H4Element";

const Breadcrumbs = ({ mainTitle, parent }: PropsTypes) => {
  return (
    <Container fluid>
      <div className="page-title">
        <Row>
          <Col xs="6">
            <H4>{mainTitle}</H4>
          </Col>
          <Col xs="6">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                  <SVG iconId="stroke-home" className="stroke-icon" />
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{parent}</BreadcrumbItem>
              <BreadcrumbItem className="active">{mainTitle}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Breadcrumbs;
