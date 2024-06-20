import { useState } from 'react'
import { Col } from 'reactstrap';
import CommonRihoModalTitle from '../Common/CommonRihoModalTitle';
import { Btn, H3, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { ClickOut, RihoLogin } from '../../../../../utils/Constant';
import CommonModal from '../../Common/CommonModal';
import StaticForm from '../../StaticBackdropModal/StaticForm';

const ModalTwo = () => {
  const [modalTwo, setModalTwo] = useState(false);
  const modalTwoToggle = () => setModalTwo(!modalTwo);
  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="Riho-demo-img">
          <CommonRihoModalTitle heading="Modal 2 -" subHeading="Result Modal" text="Example of Riho login form." />
          <div className="overflow-hidden">
            <Image className="image-fluid" src={dynamicImage(`alert/learning.png`)} alt="learning" />
            <Btn color="primary" className="mx-auto mt-3" onClick={modalTwoToggle}>{ClickOut}</Btn>
          </div>
          <CommonModal centered modalBodyClassName="social-profile text-start" isOpen={modalTwo} toggle={modalTwoToggle}>
            <div className="modal-toggle-wrapper">
              <H3>{RihoLogin}</H3>
              <P>Fill in your information below to continue.</P>
              <StaticForm staticModalToggle={modalTwoToggle} />
            </div>
          </CommonModal>
        </div>
      </div>
    </Col>
  )
}

export default ModalTwo