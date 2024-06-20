import { Card, CardBody, Col } from 'reactstrap';
import SweetAlert from "sweetalert2";
import { BasicExamples, ClickIt } from '../../../../utils/Constant';
import { basicSweetAlert } from '../../../../Data/BonusUi/SweetAlert/SweetAlert';
import { Btn } from '../../../../AbstractElements';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const BasicExample = () => {
    const displayAlert = () => {
        SweetAlert.fire({ title: "Welcome! to the Riho theme",confirmButtonColor:"var(--theme-default)" });
      };
    
      return (
        <Col xxl="3" lg="4" sm="6" xs="12">
          <Card className="height-equal">
            <CardHeaderCommon title={BasicExamples} span={basicSweetAlert} />
            <CardBody className="btn-showcase">
              <Btn color="primary" className="sweet-1" onClick={displayAlert}>{ClickIt}</Btn>
            </CardBody>
          </Card>
        </Col>
      );
}

export default BasicExample