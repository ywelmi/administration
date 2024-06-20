import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { RihoLogin, StaticBackdropModalBtn, StaticBackdropModals } from '../../../../utils/Constant';
import CommonModal from '../Common/CommonModal';
import { staticModalData } from '../../../../Data/Ui-Kits/Modal/Modal';
import { Btn, H3, P } from '../../../../AbstractElements';
import StaticForm from './StaticForm';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const StaticBackdropModal = () => {
  const [staticModal, setStaticModal] = useState(false);
  const staticModalToggle = () => setStaticModal(!staticModal);
  return (
    <Col xl="4">
      <Card>
        <CardHeaderCommon title={StaticBackdropModals} span={staticModalData} />
        <CardBody>
          <Btn color="primary" onClick={staticModalToggle}>{StaticBackdropModalBtn}</Btn>
          <CommonModal backdrop="static"  modalBodyClassName="social-profile text-start" isOpen={staticModal} toggle={staticModalToggle}>
            <div className="modal-toggle-wrapper">
              <H3>{RihoLogin}</H3>
              <P>Fill in your information below to continue.</P>
              <StaticForm staticModalToggle={staticModalToggle} />
            </div>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  )
}

export default StaticBackdropModal