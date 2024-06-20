import { Card, CardBody, Col, Row } from "reactstrap";
import { ImagesWitRadio } from "../../../../../utils/Constant";
import CustomImagesWithRadio from "./CustomImagesWithRadio";
import DynamicImagesWithRadio from "./DynamicImagesWithRadio";
import { imageWithRadioData } from "../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox";
import CommonCardHeader from "../../../../../CommonElements/CommonCardHeader/CommonCardHeader";

const ImagesWithRadio = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ImagesWitRadio} span={imageWithRadioData} />
        <CardBody>
          <div className="main-img-checkbox">
            <Row className="g-3">
              <CustomImagesWithRadio />
              <DynamicImagesWithRadio />
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithRadio;
