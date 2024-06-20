import { Card, CardBody, Col, Container, Row } from "reactstrap";
import DragCalendar from "./DragCalendar/DragCalendar";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, CalenderHeading } from "../../../utils/Constant";

const CalenderContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CalenderHeading} parent={Apps} />
      <Container fluid className="calendar-basic">
        <Row>
          <Col sm="12">
            <Card className="calendar-default">
              <CardBody>
                <Row>
                  <DragCalendar />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CalenderContainer;
