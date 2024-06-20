import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { ExtraLargeModal, FullScreenModals, WebDesigns } from '../../../../../utils/Constant'
import { fullScreenData } from '../../../../../Data/Ui-Kits/Modal/Modal'
import { Fragment, useState } from 'react'
import { ChevronsRight } from 'react-feather'
import { Btn, H5, P } from '../../../../../AbstractElements'

const FullScreenModal = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const fullScreenToggle = () => setFullScreen(!fullScreen);
  return (
    <>
      <Btn color="secondary" onClick={fullScreenToggle}>{FullScreenModals}</Btn>
      <Modal fullscreen isOpen={fullScreen} toggle={fullScreenToggle}>
        <ModalHeader toggle={fullScreenToggle}>
          <span className="fs-5">{ExtraLargeModal}</span>
        </ModalHeader>
        <ModalBody className="dark-modal">
        <div className="large-modal-header"><ChevronsRight />
          <H5 className="f-w-600">{WebDesigns} </H5>
        </div>
        <P className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</P>
        {fullScreenData.map(({ title, text }, index) => (
          <Fragment key={index}>
            <div className="large-modal-header">
              <ChevronsRight />
              <H5 className="f-w-600">{title}</H5>
            </div>
            <P className="modal-padding-space">{text}</P>
          </Fragment>
        ))}
        </ModalBody>
      </Modal>
    </>
  )
}

export default FullScreenModal