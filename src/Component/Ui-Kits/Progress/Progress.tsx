import { Col, Container, Row } from "reactstrap";
import BasicProgressBarsCart from "./BasicProgressBarsCart/BasicProgressBarsCart";
import ProgressBarsStripedCart from "./ProgressBarsStripedCart/ProgressBarsStripedCart";
import ProgressBarsAnimatedCart from "./ProgressBarsAnimatedCart/ProgressBarsAnimatedCart";
import MultipleBarsCart from "./MultipleBarsCart/MultipleBarsCart";
import ProgressWithNumberStepsCart from "./ProgressWithNumberStepsCart/ProgressWithNumberStepsCart";
import CustomProgressBarsCart from "./CustomProgressBarsCart/CustomProgressBarsCart";
import SmallProgressBarsCart from "./SmallProgressBarsCart/SmallProgressBarsCart";
import LargeProgressBarsCart from "./LargeProgressBarsCart/LargeProgressBarsCart";
import CustomHeightProgressBarsCart from "./CustomHeightProgressBarsCart/CustomHeightProgressBarsCart";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Progress, UiKits } from "../../../utils/Constant";

const ProgressContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Progress} parent={UiKits} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <BasicProgressBarsCart />
            <Row>
              <ProgressBarsStripedCart />
              <ProgressBarsAnimatedCart />
            </Row>
            <Row>
              <MultipleBarsCart />
              <ProgressWithNumberStepsCart />
            </Row>
            <CustomProgressBarsCart />
            <Row>
              <SmallProgressBarsCart />
              <LargeProgressBarsCart />
            </Row>
            <CustomHeightProgressBarsCart />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProgressContainer;
