import { Card, CardBody, Col } from "reactstrap";
import { BottomBorder } from "../../../../utils/Constant";
import { P } from "../../../../AbstractElements";
import { borderBottomData } from "../../../../Data/BonusUi/CreativeCard/CreativeCard";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const BorderBottom = () => {
  const BorderBottomText1 =
    "A navigation bar is a particularly important feature because it allows visitors to quickly and easily find";
  const BorderBottomTextEm = " important pages on your website";
  const BorderBottomText2 =
    " , like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.";

  return (
    <Col sm="12" md="6">
      <Card>
        <CardHeaderCommon headClass="border-b-info" title={BottomBorder} span={borderBottomData} />
        <CardBody>
          <P className="mb-0">
            {BorderBottomText1}
            <em className="txt-danger">{BorderBottomTextEm}</em>
            {BorderBottomText2}
          </P>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderBottom;
