import { useAppDispatch, useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { Form, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { EnterQRCode, ScanQRCode, Submit } from '../../../../../utils/Constant';
import { Btn, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';
import { setActive, setModalTwo } from '../../../../../ReduxToolkit/Reducer/TwoFactorSlice';

const ModalTwo = () => {
  const {modalTwo,active} = useAppSelector((state)=>state.twoFactor)
  const dispatch = useAppDispatch()
  
  return (
    <Modal centered isOpen={modalTwo} toggle={()=>dispatch(setModalTwo())}>
      <ModalHeader toggle={()=>dispatch(setModalTwo())}>{ScanQRCode}</ModalHeader>
      <ModalBody className="main-qr-code">
        <div className="modal-toggle-wrapper">
          <P>Scan the QR code using an authenticator app and website such as abc authenticator, OTP xyz, or pqr authenticator. You must input the six-digit code it generates below.</P>
          <div className="modal-img">
            <div className="qr-img">
              <Image src={dynamicImage(`forms/qr-code.png`)} alt="qr-code"/>
            </div>
            <div className="qr-content">
              <div className={`alert alert-light-dark light alert-dismissible fade text-dark border-left-wrapper ${ active ? "show" : "d-none"}`} role="alert">
                <i className="fa fa-exclamation-triangle" />
                <div>
                  <span>If your qr code is not working then enter this code in your input field.</span>
                  <span className="f-w-500">TYU78DE29OLAAWCVNTYFGESWQ31098QW</span>
                </div>
                <Btn close onClick={() => dispatch(setActive(false))}/>
              </div>
            </div>
          </div>
          <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Input type="text" required placeholder={EnterQRCode} />
          </Form>
          <Btn color="primary">{Submit}</Btn>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ModalTwo