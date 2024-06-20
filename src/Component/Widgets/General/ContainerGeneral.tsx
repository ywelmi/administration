import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { General, Widgets } from "../../../utils/Constant";
import WidgetTotalProject from "./WidgetTotalProject/WidgetTotalProject";
import WidgetSpecialOffer from "./WidgetSpecialOffer/WidgetSpecialOffer";

const ContainerGeneral = () => {
  return (
    <>
    <Breadcrumbs mainTitle={General} parent={Widgets}/>
    <Container fluid>
      <Row className="size-column">
        <WidgetTotalProject />
        <WidgetSpecialOffer />
      </Row>
    </Container>
    </>
  );
};

export default ContainerGeneral;
