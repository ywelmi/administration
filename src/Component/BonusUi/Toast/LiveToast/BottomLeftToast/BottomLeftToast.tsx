import { useState } from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { BottomLeftToasts, ImNotSure, RemoveMyAccount, YourAccountWillBePermanentlyDeleted } from '../../../../../utils/Constant';
import { Btn, H6, Image, P } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Service';

const BottomLeftToast = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
      <Btn color="success" onClick={toggle}>{BottomLeftToasts}</Btn>
      <div className="toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <ToastHeader className="toast-img">
            <Image className="rounded me-2" src={dynamicImage(`dashboard-3/profile.png`)} alt="profile" />
            <strong className="me-auto">Riho theme</strong>
            <Btn close onClick={() => setOpen(false)}></Btn>
          </ToastHeader>
          <ToastBody className="toast-dark">
            <H6 className="mb-2">{YourAccountWillBePermanentlyDeleted}</H6>
            <P className="mb-0">Do you intend to continue?</P>
            <div className="mt-2 pt-2 border-top d-flex gap-2">
              <Btn color="dark" size="sm">{ImNotSure}</Btn>
              <Btn color="danger" size="sm" onClick={() => setOpen(false)}>{RemoveMyAccount}</Btn>
            </div>
          </ToastBody>
        </Toast>
      </div>
    </>
  )
}

export default BottomLeftToast