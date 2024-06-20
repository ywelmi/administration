import { Container, Row } from "reactstrap";
import BorderLeft from "./BorderLeft/BorderLeft";
import BorderRight from "./BorderRight/BorderRight";
import BorderTop from "./BorderTop/BorderTop";
import BorderBottom from "./BorderBottom/BorderBottom";
import BorderPrimaryState from "./BorderPrimaryState/BorderPrimaryState";
import BorderWarningState from "./BorderWarningState/BorderWarningState";
import BorderSecondaryState from "./BorderSecondaryState/BorderSecondaryState";
import AbsoluteCard from "./AbsoluteCard/AbsoluteCard";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, CreativeCard } from "../../../utils/Constant";

const CreativeCardContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CreativeCard} parent={BonusUi} />
      <Container fluid>
        <Row>
          <BorderLeft />
          <BorderRight />
          <BorderTop />
          <BorderBottom />
          <BorderPrimaryState />
          <BorderWarningState />
          <BorderSecondaryState />
          <AbsoluteCard />
        </Row>
      </Container>
    </>
  );
};

export default CreativeCardContainer;
