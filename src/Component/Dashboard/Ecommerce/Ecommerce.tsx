import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, Ecommerce } from "../../../utils/Constant";
import TotalProject from "./TotalProject/TotalProject";
import AddProject from "./AddProject/AddProject";

const ContainerEcommerce = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Ecommerce} parent={Dashboard} />
      <Container fluid>
        <Row className="size-column">
          <TotalProject />
          <AddProject />
        </Row>
      </Container>
    </>
  );
};

export default ContainerEcommerce;
