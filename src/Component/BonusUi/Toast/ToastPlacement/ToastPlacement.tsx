import { useState } from "react";
import { Card, CardBody, Col, Form, FormGroup, Input } from "reactstrap";
import { ToastPlacements } from "../../../../utils/Constant";
import {
  placementData,
  placementListData,
} from "../../../../Data/BonusUi/Toast/Toast";
import PlacementToastContent from "./PlacementToastContent";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const ToastPlacement = () => {
  const [data, setData] = useState<string>("");

  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={ToastPlacements} span={placementData} />
        <CardBody className="toast-rtl toast-dark">
          <Form>
            <FormGroup>
              <Input type="select" className="mt-2" onChange={(e) => setData(e.target.value)}>
                <option defaultValue="">Select a position...</option>
                {placementListData.map(({ className, text }, index) => (
                  <option value={className} key={index}>
                    {text}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Form>
          <PlacementToastContent data={data} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToastPlacement;
