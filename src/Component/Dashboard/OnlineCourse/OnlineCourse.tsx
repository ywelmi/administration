import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, OnlineCourse } from "../../../utils/Constant";
import RevenueGrowth from "./RevenueGrowth/RevenueGrowth";
import BoostUpYourSale from "./BoostUpYourSale/BoostUpYourSale";
import TopProduct from "./TopProduct/TopProduct";
import NewUser from "./NewUser/NewUser";
import TeamActivity from "./TeamActivity/TeamActivity";
import UserVisitsByDay from "./UserVisitsByDay/UserVisitsByDay";
import LatestTransaction from "./LatestTransaction/LatestTransaction";
import BestSellingProduct from "./BestSellingProduct/BestSellingProduct";

const ContainerOnlineCourse = () => {
  return (
    <>
      <Breadcrumbs mainTitle={OnlineCourse} parent={Dashboard} />
      <Container fluid>
        <Row className="size-column">
          <RevenueGrowth />
          <BoostUpYourSale />
          <TopProduct />
          <NewUser />
          <TeamActivity />
          <UserVisitsByDay />
          <LatestTransaction />
          <BestSellingProduct />
        </Row>
      </Container>
    </>
  );
};

export default ContainerOnlineCourse;
