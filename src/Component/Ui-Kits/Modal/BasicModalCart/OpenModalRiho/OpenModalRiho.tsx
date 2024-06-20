import { useState } from 'react'
import CommonModal from '../../Common/CommonModal';
import { RihoSignUp, OpenModalForRiho } from '../../../../../utils/Constant';
import { Btn, H3 } from '../../../../../AbstractElements';
import OpenModalForm from './OpenModalForm';

const OpenModalRiho = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalToggle = () => setOpenModal(!openModal);
  return (
    <>
      <Btn color="primary" onClick={openModalToggle}>{OpenModalForRiho}</Btn>
      <CommonModal isOpen={openModal} toggle={openModalToggle} modalBodyClassName="p-0" heading="Riho SIGN-UP">
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <H3 className="modal-header justify-content-center border-0">{RihoSignUp}</H3>
          <OpenModalForm modal={openModalToggle}/>
        </div>
      </CommonModal>
    </>
  )
}

export default OpenModalRiho