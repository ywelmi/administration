import { Card, CardBody, Col } from "reactstrap";
import { ContextualClassesHeading, Href } from "../../../../utils/Constant";
import {contextualData, contextualDataList} from "../../../../Data/Ui-Kits/Lists/Lists";
import { LI, UL } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const ContextualClasses = () => {
  return (
    <Col xl="6" sm="12" className="box-col-6">
      <Card className="height-equal">
        <CardHeaderCommon title={ContextualClassesHeading} span={contextualData} />
        <CardBody>
          <UL>
            <LI href={Href} className="list-group-item-action list-light-primary" >
              This is Primary bg you can use
              <em className="txt-primary fw-bold"> .list-light-primary </em> class.
            </LI>
            {contextualDataList.map((item, index) => (
              <LI href={Href} className={`list-group-item-action list-light-${item}`} key={index} >
                This is <span className="text-capitalize">{item}</span> bg you can use
                <em className={`txt-${item} fw-bold`}> .list-light- {item}</em> class.
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClasses;
