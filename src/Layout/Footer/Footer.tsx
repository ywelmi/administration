import { Col, Container, Row } from "reactstrap";
import { P } from "../../AbstractElements";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="12" className="footer-copyright text-center">
            <P className="mb-0">Copyright 2024 © Riho theme by pixelstrap</P>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
