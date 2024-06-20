import { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Close, FullScreenModal, FullscreenModal, Save } from '../../../../../utils/Constant'
import WebDesign from './WebDesign/WebDesign';
import UXDesigner from './UXDesigner/UXDesigner';
import { Btn } from '../../../../../AbstractElements';

const FullModal = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenToggle = () => setFullScreen(!fullScreen);
  return (
    <>
      <Btn color="secondary-2x" outline onClick={fullScreenToggle}>{FullScreenModal}</Btn>
      <Modal fullscreen isOpen={fullScreen} toggle={fullScreenToggle}>
        <ModalHeader toggle={fullScreenToggle}>
          {FullscreenModal}
        </ModalHeader>
        <ModalBody>
          <WebDesign />
          <UXDesigner />
        </ModalBody>
        <ModalFooter>
          <Btn color="secondary" onClick={fullScreenToggle}>{Close}</Btn>
          <Btn color="primary">{Save}</Btn>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default FullModal