import { Card, CardBody, Col } from "reactstrap";
import { FontWeight, FontWeightTitle } from "../../../../utils/Constant";
import { H1, H2, H3, H4, H5 } from "../../../../AbstractElements";
import { fontWeightData } from "../../../../Data/Ui-Kits/Typography/Typography";
import CardHeaderCommon from "../../CardHeaderCommon";

const FontWeightCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CardHeaderCommon title={FontWeight} span={fontWeightData} />
        <CardBody className="d-flex flex-column gap-3">
          <H1 className="f-w-700">
            {FontWeightTitle} 1 Using<code> f-w-700</code>
          </H1>
          <H2 className="f-w-600">
            {FontWeightTitle} 2 Using<code> f-w-600</code>
          </H2>
          <H3 className="f-w-500">
            {FontWeightTitle} 3 Using<code> f-w-500</code>
          </H3>
          <H4 className="f-w-400">
            {FontWeightTitle} 4 Using<code> f-w-400</code>
          </H4>
          <H5 className="f-w-300">
            {FontWeightTitle} 5 Using<code> f-w-300</code>
          </H5>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontWeightCart;
