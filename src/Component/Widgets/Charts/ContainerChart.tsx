import { Container } from "reactstrap";
import TotalSaleWidgets from "./TotalSaleWidgets/TotalSaleWidgets";
import MonthlyHistory from "./MonthlyHistory/MonthlyHistory";
import LiveProducts from "./LiveProducts/LiveProducts";
import StockMarket from "./StockMarket/StockMarket";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Chart, Widgets } from "../../../utils/Constant";

const ContainerChart = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Chart} parent={Widgets} />
      <Container fluid>
        <TotalSaleWidgets />
        <MonthlyHistory />
        <LiveProducts />
        <StockMarket />
      </Container>
    </>
  );
};

export default ContainerChart;
