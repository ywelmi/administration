import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ChooseActivities, VariationCheckboxHeading } from "../../../../../utils/Constant";
import { H6 } from "../../../../../AbstractElements";
import VariationCheckboxUpgrade from "./VariationCheckboxUpgrade";
import { variationCheckboxData, variationCheckboxDataList } from "../../../../../Data/Forms/FormsControl/MegaOption/MegaOption";
import CommonCardHeader from "../../../../../CommonElements/CommonCardHeader/CommonCardHeader";

const VariationCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={VariationCheckboxHeading} span={variationCheckboxData}/>
        <CardBody>
          <Row className="g-3">
            <Col xl="4" md="5">
              <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <H6 className="sub-title">{ChooseActivities}</H6>
                {variationCheckboxDataList.map(
                  ({ id, color, check, labelText }, index) => (
                    <div className="payment-wrapper" key={index}>
                      <div className="payment-first">
                        <FormGroup className={`checkbox checkbox-${color}`} check>
                          <Input id={`check-${id}`} type="checkbox" defaultChecked={check}/>
                          <Label className="mb-0" for={`check-${id}`} check> {labelText}</Label>
                        </FormGroup>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Col>
            <VariationCheckboxUpgrade />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationCheckbox;
