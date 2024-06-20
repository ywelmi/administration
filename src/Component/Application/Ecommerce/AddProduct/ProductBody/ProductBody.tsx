import { Row } from "reactstrap";
import ProductLeftSidebar from "./ProductLeftSidebar/ProductLeftSidebar";
import ProductTabContent from "./ProductTabContent/ProductTabContent";

const ProductBody = () => {
  return (
    <Row className="g-xl-5 g-3">
      <ProductLeftSidebar />
      <ProductTabContent />
    </Row>
  );
};

export default ProductBody;
