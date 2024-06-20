import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, Default } from "../../../utils/Constant";
import SalesChart from "./SalesChart/SalesChart";
import TotalRevenue from "./TotalRevenue/TotalRevenue";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import TotalSales from "./TotalSales/TotalSales";
import LatestOrders from "./LatestOrders/LatestOrders";
import LiveProduct from "./LiveProduct/LiveProduct";
import TopRevenueProduct from "./TopRevenueProduct/TopRevenueProduct";
import AddNewProduct from "./AddNewProduct/AddNewProduct";

const ContainerDefault = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Default} parent={Dashboard} />
      <Container fluid>
        <Row>
          <SalesChart />
          <TotalRevenue />
          <SpecialOffer />
          <TotalSales />
          <LatestOrders />
          <LiveProduct />
          <TopRevenueProduct />
          <AddNewProduct />
        </Row>
      </Container>
    </>
  );
};

export default ContainerDefault;
