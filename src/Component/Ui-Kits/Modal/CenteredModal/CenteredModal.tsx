import { Card, CardBody, Col } from "reactstrap";
import { CenteredModals, Close, SomethingWentWrong, VerticallyCentered } from "../../../../utils/Constant";
import { centeredModalList } from "../../../../Data/Ui-Kits/Modal/Modal";
import CommonModal from "../Common/CommonModal";
import { Btn, H4, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { useState } from "react";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const CenteredModal = () => {
  const [centred, setCentered] = useState(false);
  const centeredToggle = () => setCentered(!centred);
  return (
    <Col xl="4">
      <Card>
        <CardHeaderCommon title={CenteredModals} span={centeredModalList} />
        <CardBody className="badge-spacing">
          <Btn color="success" onClick={centeredToggle}>
            {VerticallyCentered}
          </Btn>
          <CommonModal centered isOpen={centred} toggle={centeredToggle}>
            <div className="modal-toggle-wrapper">
              <UL className="modal-img">
                <LI className="text-center">
                  <Image src={dynamicImage(`gif/danger.gif`)} alt="error"/>
                </LI>
              </UL>
              <H4 className="text-center pb-2">{SomethingWentWrong}</H4>
              <P className="text-center">
                Attackers on malicious activity may trick you into doing
                something dangrous like installing software or revealing your
                personal informations.
              </P>
              <Btn color="secondary" className="d-flex m-auto" onClick={centeredToggle}>
                {Close}
              </Btn>
            </div>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CenteredModal;
